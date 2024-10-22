import React from "react";

const Top: React.FC = (props) => {
  return (
    <>
      <div className="flex pb-2">
        <img src="/assets/image/Vector.svg" alt="Vector" className="px-1" />
        <img
          src="/assets/image/F1M5_Logo.svg"
          alt="F1M5_Logo"
          className="px-2"
        />
        <img
          src="/assets/image/Vector (3).svg"
          alt="Vector (3)"
          className="px-2 ml-auto"
        />
        <h1 className="text-[16px] text-[#00A6FF] font-bold px-2">$1990.6</h1>
        <img
          src="/assets/image/Frame.svg"
          alt="Frame"
          className="pl-1 border-l border-blue-500"
        />
      </div>
      <div className="px-1 py-2">
        <img
          src="/assets/image/Frame 18.png"
          className="w-full"
          alt="Frame 18"
        />
      </div>
      <div className="flex">
        <img
          src="/assets/image/bell-svgrepo-com 1.svg"
          alt="bell-svgrepo-com 1"
          className="px-1"
        />
        <h1 className="text-[14px] text-[#00A6FF] px-2">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </h1>
      </div>
    </>
  );
};

export default Top;
