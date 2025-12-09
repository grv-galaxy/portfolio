
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Works from "./components/works";
import Labs from "./components/labs";
import Footer from "./components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const beamRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  // 🔥 Fade out beam on scroll (80% → 90%)
  useEffect(() => {
    if (!beamRef.current) return;

    gsap.fromTo(
      beamRef.current,
      { opacity: 1 },   // start fully visible
      {
        opacity: 0,     // fade to fully invisible
        ease: "none",
        scrollTrigger: {
          trigger: "#about-section",  
          start: "top 80%",   // when user scrolls 80%
          end: "top 10%",     // at 90% scroll = beam gone
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <main> 
      {/* FIXED BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-10">
        <img
          className="absolute top-[-5%] right-0 opacity-100 w-auto h-auto"
          src="/gem.png"
          alt="gradient background"
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen">

        {/* 🔥 This is the BEAM — now fade controlled by ScrollTrigger */}
        <div
          ref={beamRef}
          className="h-0 w-[40rem] absolute top-[5%] right-[-15%] -rotate-[30deg]"
          style={{
            boxShadow: '0 0 200px 50px #7B2CFF',
            filter: 'brightness(1.2)',
            willChange: 'opacity', // Hint for better performance
            pointerEvents: 'none' // Prevent interaction
          }}
        ></div>

        <Header />
        <Hero />
        
        <div id="about-section">
          <About />
        </div>
        <div id="work-section">
          <Works />
        </div>
        <div id="labs-section">
        <Labs />
        </div>
        <div id="footer-section">
        <Footer />
        </div>
      </div>
    </main>
  )
}
