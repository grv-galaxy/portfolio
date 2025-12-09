
// import 'boxicons/css/boxicons.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Spline from '@splinetool/react-spline';

// const Hero = () => {
//   return (
//     // The <main> tag should be 'relative' if you want the absolute ticker to position correctly against it.
//     // If not, the ticker will position relative to the viewport (which is usually fine).
//     <main className="relative flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        
//         {/* Left Section: Text Content (Unchanged) */}
//         <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" 
//              className="max-w-xl ml-[5%] z-10 
//                         mt-[90%] md:mt-[60%] lg:mt-0 
//                         lg:w-1/2"> 
            
//             {/* ... Existing content ... */}
//             <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#009DFF] to-[#7B2CFF] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
//                 <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
//                     <i class="bi bi-gem"></i>INTRODUCING 
//                 </div>
//             </div>

//             {/* Main Heading & Content (Unchanged) */}
//             <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
//                 EMAIL FOR 
//                 <br/>
//                 DEVELOPERS.
//             </h1>
//             <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
//                 the best way to reach humans instead of spam folders, deliver transactional and marketing emails at scale.
//             </p>
//             <div className='flex gap-4 mt-12'>
//                 <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
//                     Documentation <i class="bi bi-box-arrow-up-right"></i> 
//                 </a>
//                 <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="#">
//                     Get Started <i class="bi bi-box-arrow-up-right"></i> 
//                 </a>
//             </div>
//         </div>

//         {/* Right Section: 3D Object Model Container (Spline) - Only contains the model and its immediate overlay */}
//         <div data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" 
//              className='absolute lg:relative lg:top-auto lg:left-auto 
//                         top-0 left-0 right-0 bottom-0
//                         lg:w-1/2 lg:h-full lg:min-h-[500px] 
//                         flex items-center justify-center pointer-events-none'> 
            
//             {/* Inner div to constrain the Spline's visual size - Must remain 'relative' */}
//             <div className="w-[80vw] h-[80vh] lg:w-[60vw] lg:h-[80vh] pointer-events-auto relative">
                
//                 {/* <Spline 
//                     className='w-full h-full' 
//                     scene="https://prod.spline.design/oJUUsovYi2EVJTif/scene.splinecode" 
//                 /> */}
                
//                 {/* STATIC BLACK BOX: Stays here to cover the "Built with Spline" label in the top-right */}
                
                
//             </div> 
//         </div>
        
//         {/* NEW: FULL-WIDTH SCROLLING TEXT Ticker - Moved outside the Spline's 1/2 width container */}
//         {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 bg-black z-30 pointer-events-none">
//             <div className="scrolling-text absolute top-0 whitespace-nowrap text-xl font-bold text-white uppercase opacity-70">
//                 * YOUR PROMOTIONAL TEXT * WEBSITE TITLE * CONTACT US * NEWS * YOUR PROMOTIONAL TEXT * WEBSITE TITLE * CONTACT US * NEWS * </div>
//         </div> */}
//     </main>
//   );
// };

// export default Hero;




// Hero.jsx

import React, { lazy, Suspense, useRef } from 'react';
// Import only the CSS files directly
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import useOnScreen from './useOnScreen'; // <-- Make sure to create this file!

// 1. LAZY LOAD THE SPLINE COMPONENT (Code Splitting)
const LazySpline = lazy(() => import('@splinetool/react-spline'));

// 2. Create a simple Loading component/Placeholder for Suspense fallback and off-screen state
const SplineLoadingFallback = () => (
    <div className="flex items-center justify-center w-full h-full bg-transparent text-gray-400">
        Loading 3D Model...
    </div>
);


const Hero = () => {
    // 1. Create a ref for the Spline container element
    const splineContainerRef = useRef(null); 
    
    // 2. Use the custom hook to determine if the container is on screen
    // rootMargin: '500px 0px' tells the Intersection Observer to consider the element visible 
    // when it is within 500 pixels (top/bottom) of the viewport. This prefetches/unloads early.
    const isSplineVisible = useOnScreen(splineContainerRef, '500px 0px'); 

  return (
    // The <main> tag should be 'relative' if you want the absolute ticker to position correctly against it.
    <main className="relative flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        
        {/* Left Section: Text Content (Unchanged) */}
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" 
              className="max-w-xl ml-[5%] z-10 
                        mt-[90%] md:mt-[60%] lg:mt-0 
                        lg:w-1/2"> 
            
            {/* ... Existing content ... */}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#009DFF] to-[#7B2CFF] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i className="bi bi-gem"></i>INTRODUCING 
                </div>
            </div>

            {/* Main Heading & Content (Unchanged) */}
            {/* <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                EMAIL FOR 
                <br/>
                DEVELOPERS.
            </h1>
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                the best way to reach humans instead of spam folders, deliver transactional and marketing emails at scale.
            </p> */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#009DFF] to-[#7B2CFF]'>
                    BUILDING
                </span>
                <br/>
                WHAT'S NEXT.
            </h1>
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                I transform complex ideas into functional realities, leveraging expertise in AI/ML engineering, scalable backend systems, and modern web application development.
            </p>
            <div className='flex gap-4 mt-12'>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
                    Documentation <i className="bi bi-box-arrow-up-right"></i> 
                </a>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="#">
                    Get Started <i className="bi bi-box-arrow-up-right"></i> 
                </a>
            </div>
        </div>

        {/* Right Section: 3D Object Model Container (Spline) */}
        <div data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" 
              className='absolute lg:relative lg:top-auto lg:left-auto 
                        top-0 left-0 right-0 bottom-0
                        lg:w-1/2 lg:h-full lg:min-h-[500px] 
                        flex items-center justify-center pointer-events-none'> 
            
            {/* Inner div to constrain the Spline's visual size - Must remain 'relative' */}
            {/* 3. Attach the ref to the element that defines the Spline's viewport area */}
            <div 
                ref={splineContainerRef} 
                className="w-[80vw] h-[80vh] lg:w-[60vw] lg:h-[80vh] pointer-events-auto relative"
            >
                
                {/* 4. Conditionally render the Spline based on visibility */}
                {isSplineVisible ? (
                    <Suspense fallback={<SplineLoadingFallback />}>
                        <LazySpline 
                            className='w-full h-full' 
                            scene="https://prod.spline.design/oJUUsovYi2EVJTif/scene.splinecode" 
                        />
                    </Suspense>
                ) : (
                    // When off-screen, render the placeholder to maintain layout space
                    // but completely unmount the resource-heavy Spline component.
                    <SplineLoadingFallback /> 
                )}
                
                {/* STATIC BLACK BOX: Stays here to cover the "Built with Spline" label in the top-right */}
            </div> 
        </div>
        
        {/* NEW: FULL-WIDTH SCROLLING TEXT Ticker - Moved outside the Spline's 1/2 width container */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 bg-black z-30 pointer-events-none">
            <div className="scrolling-text absolute top-0 whitespace-nowrap text-xl font-bold text-white uppercase opacity-70">
                * YOUR PROMOTIONAL TEXT * WEBSITE TITLE * CONTACT US * NEWS * YOUR PROMOTIONAL TEXT * WEBSITE TITLE * CONTACT US * NEWS * </div>
        </div>
    </main>
  );
};

export default Hero;