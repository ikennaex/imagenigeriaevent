import React from "react";


const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customBlue text-white">
      <div className="flex flex-col justify-center items-center animate-pulse rounded-full h-28 w-28 border-white">
        <img src= "images/logo.png" alt="" />
        <p className="text-center leading-[1] font-semibold pt-4">Boomanage Properties</p>
      </div>
    </div>
  );
};

export default Loader;