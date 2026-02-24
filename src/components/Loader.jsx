import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-customBlue">
      <div className="animate-pulse">
        <img
          className="w-60 md:w-80 lg:w-96"
          src="/images/logo.png"
          alt="Company Logo"
        />
      </div>
    </div>
  );
};

export default Loader;