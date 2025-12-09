import React, { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Project Alpha",
    description: "Revolutionary Design System",
    visual: "Alpha",
    image: "🎨",
    tags: ["Design", "UI/UX", "System Design"],
    year: "2023",
    details:
      "A groundbreaking initiative that transformed the way we approach design and user experience.",
  },
  {
    title: "Project Beta",
    description: "Operational Excellence Platform",
    visual: "Beta",
    image: "⚡",
    tags: ["Platform", "Automation", "Analytics"],
    year: "2023",
    details: "An innovative solution that streamlined operations and improved efficiency.",
  },
  {
    title: "Project Gamma",
    description: "Next-Gen Technology Stack",
    visual: "Gamma",
    image: "🚀",
    tags: ["AI/ML", "Technology", "Innovation"],
    year: "2024",
    details: "Explored emerging technologies including AI and real-time data processing.",
  },
  {
    title: "Project Delta",
    description: "Global Collaboration Framework",
    visual: "Delta",
    image: "🌍",
    tags: ["Collaboration", "Scale", "Global"],
    year: "2024",
    details: "A global collaboration tool used by millions across 50+ countries.",
  },
];

const ProjectVisualCard = memo(({ project, index, totalProjects }) => {
  const isEven = index % 2 === 0;
  const bgGradient = isEven
    ? "bg-gradient-to-br from-blue-900 to-slate-900 border-blue-400/50"
    : "bg-gradient-to-br from-purple-900 to-slate-900 border-purple-400/50";
  const accentColor = isEven ? "text-blue-300" : "text-purple-300";

  return (
    <div
      className="absolute inset-0 flex justify-center items-center"
      style={{ willChange: "transform" }}
    >
      <div className={`relative rounded-3xl shadow-2xl p-8 w-full h-full flex flex-col items-center justify-center border ${bgGradient}`}>
        <div className="absolute top-6 left-6 text-xs font-mono tracking-widest text-gray-400">
          {index + 1 < 10 ? `0${index + 1}` : index + 1} / 0{totalProjects}
        </div>
        <div className={`text-6xl mb-4 drop-shadow-lg ${accentColor}`}>{project.image}</div>
        <p className="text-4xl font-black tracking-tight drop-shadow-lg text-white">
          {project.visual}
        </p>
      </div>
    </div>
  );
});

ProjectVisualCard.displayName = "ProjectVisualCard";

const ProjectDetails = memo(({ project, index, scrollYProgress, totalProjects }) => {
  const step = 1 / totalProjects;
  const start = index * step;
  const end = start + step;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.01, start + 0.02, end - 0.02, end + 0.01],
    [0, 1, 1, 0]
  );

  const y = useTransform(scrollYProgress, [start, end], [40, 0]);

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center lg:justify-end pointer-events-none"
      style={{
        opacity,
        y,
        willChange: "opacity, transform",
      }}
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 pointer-events-auto">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-blue-500"></span>
              <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">
                {project.year}
              </span>
            </div>
            <h3 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg max-w-lg">
            {project.details}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 text-gray-100 text-xs font-medium rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-8">
            <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition font-bold tracking-wide text-sm">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectDetails.displayName = "ProjectDetails";

const Works = () => {
  const containerRef = useRef(null);
  const totalProjects = projects.length;
  const totalRotationDegrees = -90 * (totalProjects - 1);
  const initialTranslateZ = 250;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hooks must be at top level - NOT in useMemo
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalRotationDegrees]
  );

  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.98, 1],
    [0, 1, 1, 0]
  );

  // Only memoize expensive array operations, not Hooks
  const projectCards = useMemo(
    () =>
      projects.map((project, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `rotateY(${index * 90}deg) translateZ(${initialTranslateZ}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <ProjectVisualCard
            project={project}
            index={index}
            totalProjects={totalProjects}
          />
        </motion.div>
      )),
    [totalProjects]
  );

  const projectDetails = useMemo(
    () =>
      projects.map((project, index) => (
        <div key={index} className="h-screen w-full relative">
          <ProjectDetails
            project={project}
            index={index}
            scrollYProgress={scrollYProgress}
            totalProjects={totalProjects}
          />
        </div>
      )),
    [scrollYProgress, totalProjects]
  );

  const totalHeight = useMemo(() => `${totalProjects * 100}vh`, [totalProjects]);

  return (
    <section ref={containerRef} className="relative min-h-screen">
      {/* LEFT ROTATING IMAGE */}
      <div className="fixed top-0 left-0 w-full lg:w-1/2 h-screen hidden lg:flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          className="relative w-[300px] h-[360px]"
          style={{
            opacity: containerOpacity,
            perspective: "1200px",
          }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{
              rotateY,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform", // Optimize for performance
            }}
          >
            {projectCards}
          </motion.div>
        </motion.div>
      </div>

      {/* TOP LABEL */}
      <div className="absolute top-0 w-full z-20 p-8 pointer-events-none flex justify-center">
        <h2 className="text-6xl md:text-7xl font-bold text-white tracking-wide font-serif text-glow">
          SELECTED WORKS
        </h2>
      </div>

      {/* DETAILS (RIGHT SIDE) */}
      <div style={{ height: totalHeight }} className="relative z-20">
        {projectDetails}
      </div>
    </section>
  );
};

export default Works;
