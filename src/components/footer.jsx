import React from 'react';
// Glow Component
import GlowHoverOption from './GlowHoverOption';
// React Icons
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {

    const contactLinks = [
        {
            href: "mailto:thakurgauravkr@gmail.com",
            icon: HiOutlineMail,
            label: "EMAIL"
        },
        {
            href: "https://github.com/grv-galaxy",
            icon: FaLinkedinIn,
            label: "LINKEDIN"
        },
        {
            href: "https://github.com/grv-galaxy",
            icon: FaGithub,
            label: "GITHUB"
        },
        {
            href: "path/to/your/resume.pdf",
            icon: HiOutlineDocumentText,
            label: "RESUME"
        },
    ];

    return (
        <footer className="w-full mt-32 text-gray-300 relative z-10">

            {/* Top Message */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                    Let’s collaborate and bring your ideas to life.<br />
                    Reach out through any of the channels below.
                </p>
            </div>


            {/* Social Links + Glow Buttons */}
            <div className="w-full mt-16 relative">

                {/* Soft Divider Glow */}
                <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-gradient-to-r 
                                from-transparent via-white/10 to-transparent pointer-events-none"></div>

                <div className="relative flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 px-4">
                    {contactLinks.map(link => (
                        <GlowHoverOption key={link.label} Icon={link.icon}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm sm:text-base tracking-widest text-white
                                            transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        </GlowHoverOption>
                    ))}
                </div>
            </div>


            {/* Bottom Section */}
            <div className="max-w-5xl mx-auto mt-20 px-6 py-10 border-t border-white/10 
                            flex flex-col md:flex-row items-center justify-between">

                {/* Logo */}
                <div className="mb-6 md:mb-0">
                    <img
                      id="logoGlow"
                      src="/nnmm.svg"
                      alt="logo"
                      className="
                          w-24 md:w-28 lg:w-32
                          object-contain mt-2 ml-2
                          brightness-200
                          logo-glow-hover
                          magnetic
                      "/>
                </div>

                {/* Bottom Text */}
                <div className="text-center md:text-right text-xs tracking-wider opacity-80">
                    <p>&copy; {new Date().getFullYear()} Gaurav Thakur • New Delhi, India</p>
                    <p className="mt-1">
                        3D Model powered by{" "}
                        <a
                            href="https://www.nightride.fm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            Spline
                        </a>
                        . All rights reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
