// import React, { useState } from "react";


// const GlowHoverOption = ({ children, icon, customClass }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <div 
//       className={`relative w-[95%] sm:w-48 h-10 rounded-full transition-all duration-300
//           ${hover ? "bg-gradient-to-r from-[#009DFF] to-[#7B2CFF] shadow-[0_0_20px_rgba(255,255,255,0.5)]" : "bg-transparent"}`}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       {/* Inner black area */}
//       <div 
//         className={`absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white
//             transition-all duration-300`}
//       >
//         {icon && <i className={icon}></i>}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default GlowHoverOption;





import React, { useState } from "react";

const GlowHoverOption = ({ children, Icon, customClass }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative w-[95%] sm:w-48 h-10 rounded-full transition-all duration-300
      ${hover ? "bg-gradient-to-r from-[#009DFF] to-[#7B2CFF] shadow-[0_0_20px_rgba(255,255,255,0.5)]" : "bg-transparent"}
      ${customClass}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white
        transition-all duration-300"
      >
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </div>
    </div>
  );
};

export default GlowHoverOption;

