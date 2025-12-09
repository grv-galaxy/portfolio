
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
const About = () => {
  return (
    <section className="relative min-h-screen py-20 px-8 lg:px-20 flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-left space-y-8" data-aos="fade-right">
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-wide font-serif text-glow" style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni Moda', serif" }}>
            ABOUT ME
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans">
            Hey, I'm Gaurav, a Developer from India with a passion for building things that actually make an impact. I work across AI, Machine Learning, and Full-Stack Development — and I love turning ideas into real, working products. With 5 years of experience, I approach everything as a creative problem-solver who enjoys pushing technology to do more.
            </p>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans">
            But I'd rather let my work speak for itself. That's why I built this space — so you can explore what I create and, hopefully, we can build something amazing together 🚀
            </p>


          {/* Social Icons */}
          <div className="flex space-x-6 pt-4">
            <a href="mailto:thakurgauravkr@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaEnvelope className="text-3xl" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedinIn className="text-3xl" />
            </a>
            <a href="https://github.com/grv-galaxy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className="text-3xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl font-bold">
              W.
            </a>
          </div>
        </div>

        {/* Right Section: Image Slot */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
          {/* Main change: Remove the 'bg-gray-800' from this div,
              and ensure your image has a transparent background.
              The 'rounded-lg' and 'shadow-2xl' will now apply to the image's bounding box. */}
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] overflow-hidden shadow-2xl rounded-lg">
            <img
              // IMPORTANT: Replace this with the path to your NEW image with a transparent background
              src="/mee.png" 
              alt="Christian Ortiz"
              className="absolute inset-0 w-full h-full object-cover object-center scale-105"
            />
            {/* You might still want this overlay for subtle shading/effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
