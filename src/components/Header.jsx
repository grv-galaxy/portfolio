
// import { useEffect } from "react";
// import 'boxicons/css/boxicons.min.css';
// import GlowHoverOption from './GlowHoverOption';
// import gsap from "gsap";

// const Header = () => {

//     // Mobile Menu Toggle
//     const toggleMobileMenu = () => {
//         const mobileMenu = document.getElementById('mobileMenu');
//         mobileMenu.classList.toggle('hidden');
//     };

//     // GSAP Magnetic Hover Effect
//     useEffect(() => {
//         const img = document.getElementById("logoGlow");
//         if (!img) return;

//         const strength = 25; // magnetic pull

//         const handleMove = (e) => {
//             const rect = img.getBoundingClientRect();
//             const x = e.clientX - (rect.left + rect.width / 2);
//             const y = e.clientY - (rect.top + rect.height / 2);

//             gsap.to(img, {
//                 x: x / strength,
//                 y: y / strength,
//                 duration: 0.3,
//                 ease: "power3.out",
//             });
//         };

//         const reset = () => {
//             gsap.to(img, { x: 0, y: 0, duration: 0.5 });
//         };

//         img.addEventListener("mousemove", handleMove);
//         img.addEventListener("mouseleave", reset);

//         return () => {
//             img.removeEventListener("mousemove", handleMove);
//             img.removeEventListener("mouseleave", reset);
//         };
//     }, []);

//     return (
//         <header className="flex justify-between items-center py-4 px-4 lg:px-10">

//             {/* Logo with all glow effects */}
//             <img
//                 id="logoGlow"
//                 data-aos="fade-down"
//                 data-aos-easing="linear"
//                 data-aos-duration="500"
//                 src="/nnmm.svg"
//                 alt="logo"
//                 className="
//                     w-24 md:w-28 lg:w-32
//                     object-contain mt-2 ml-2
//                     brightness-200
//                     logo-glow-hover
//                     magnetic
//                 "
                
//             />

//             <nav className="hidden md:flex items-center gap-5 lg:gap-5">
//                 <GlowHoverOption>
//                     <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"
//                        className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#about-section">
//                         ABOUT
//                     </a>
//                 </GlowHoverOption>

//                 <GlowHoverOption>
//                     <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700"
//                        className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#work-section">
//                         WORKS
//                     </a>
//                 </GlowHoverOption>

//                 <GlowHoverOption>
//                     <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800"
//                        className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#labs-section">
//                         LABS
//                     </a>
//                 </GlowHoverOption>

//                 <GlowHoverOption>
//                     <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900"
//                        className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
//                         CONTACT
//                     </a>
//                 </GlowHoverOption>
//             </nav>

//             <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none 
//                                font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
//                 SIGNIN
//             </button>

//             {/* Mobile Menu Icon */}
//             <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
//                 <i className="bx bx-menu"></i>
//             </button>

//             {/* Mobile Menu */}
//             <div id="mobileMenu"
//                  className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden bg-black bg-opacity-70">
//                 <nav className="flex flex-col gap-6 items-center">
//                     <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">COMPANY</a>
//                     <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">FEATURE</a>
//                     <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">RESOURCE</a>
//                     <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">DOCS</a>
//                 </nav>
//             </div>

//         </header>
//     );
// };

// export default Header;






import { useEffect, useCallback } from "react"; // <-- Import useCallback
import 'boxicons/css/boxicons.min.css';
import GlowHoverOption from './GlowHoverOption';
import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // <-- Import ScrollToPlugin

// Register the ScrollToPlugin for GSAP to scroll to targets
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {

    // Mobile Menu Toggle (No change needed)
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        // Close the mobile menu when any navigation item is clicked
        if (!mobileMenu.classList.contains('hidden')) {
             mobileMenu.classList.add('hidden');
        }
    };
    
    // 🔥 New function to handle smooth scrolling with GSAP
    const handleSmoothScroll = useCallback((e) => {
        // Prevent the default browser behavior (i.e., instant jump and URL change)
        e.preventDefault(); 
        
        // Get the target hash from the href attribute (e.g., "#about-section")
        const targetId = e.currentTarget.getAttribute("href");
        
        // Close the mobile menu if it's open (optional, but good UX)
        toggleMobileMenu();

        // Use GSAP to animate the scroll position
        gsap.to(window, {
            duration: 1.0, // Scroll duration in seconds (adjust for speed)
            scrollTo: {
                y: targetId, // Target ID to scroll to
                offset: 50  // Optional: Add a slight offset (e.g., for sticky header height)
            },
            ease: "power2.inOut" // Smooth easing function
        });
        
        // IMPORTANT: Update the URL hash without triggering a jump
        // This is optional but useful for users who want to share the URL or refresh on the section.
        // If you absolutely want NO URL change, remove the next line.
        window.history.pushState(null, null, targetId);

    }, []); // Empty dependency array means this function is created once

    // GSAP Magnetic Hover Effect (No change needed)
    useEffect(() => {
        const img = document.getElementById("logoGlow");
        if (!img) return;

        const strength = 25; // magnetic pull

        const handleMove = (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            gsap.to(img, {
                x: x / strength,
                y: y / strength,
                duration: 0.3,
                ease: "power3.out",
            });
        };

        const reset = () => {
            gsap.to(img, { x: 0, y: 0, duration: 0.5 });
        };

        img.addEventListener("mousemove", handleMove);
        img.addEventListener("mouseleave", reset);

        return () => {
            img.removeEventListener("mousemove", handleMove);
            img.removeEventListener("mouseleave", reset);
        };
    }, []);

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-10">

            {/* Logo with all glow effects */}
            {/* ... (Logo content unchanged) */}
            <img
                id="logoGlow"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                src="/nnmm.svg"
                alt="logo"
                className="
                    w-24 md:w-28 lg:w-32
                    object-contain mt-2 ml-2
                    brightness-200
                    logo-glow-hover
                    magnetic
                "
            />

            <nav className="hidden md:flex items-center gap-5 lg:gap-5">
                <GlowHoverOption>
                    <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"
                       className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" 
                       href="#about-section"
                       onClick={handleSmoothScroll} // <-- ADD CLICK HANDLER
                    >
                        ABOUT
                    </a>
                </GlowHoverOption>

                <GlowHoverOption>
                    <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700"
                       className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" 
                       href="#work-section"
                       onClick={handleSmoothScroll} // <-- ADD CLICK HANDLER
                    >
                        WORKS
                    </a>
                </GlowHoverOption>

                <GlowHoverOption>
                    <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800"
                       className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" 
                       href="#labs-section"
                       onClick={handleSmoothScroll} // <-- ADD CLICK HANDLER
                    >
                        LABS
                    </a>
                </GlowHoverOption>

                <GlowHoverOption>
                    <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900"
                       className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" 
                       href="#footer-section" // <-- Changed to a proper section ID
                       onClick={handleSmoothScroll} // <-- ADD CLICK HANDLER
                    >
                        CONTACT
                    </a>
                </GlowHoverOption>
            </nav>

            {/* Sign In Button (unchanged) */}
            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none 
                                font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                SIGNIN
            </button>

            {/* Mobile Menu Icon (unchanged) */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i className="bx bx-menu"></i>
            </button>

            {/* Mobile Menu */}
            <div id="mobileMenu"
                  className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden bg-black bg-opacity-70">
                <nav className="flex flex-col gap-6 items-center">
                    {/* Assuming these map to sections or are external links. Update hrefs and add handler if they scroll */}
                    <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">COMPANY</a> 
                    <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">FEATURE</a>
                    <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">RESOURCE</a>
                    <a className="text-base tracking-wider hover:text-gray-300 z-50" href="#">DOCS</a>
                </nav>
            </div>

        </header>
    );
};

export default Header;