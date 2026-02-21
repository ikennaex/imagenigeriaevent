import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Mail } from "lucide-react";

const Herosection = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-12 bg-customGreen flex flex-col justify-center px-6 md:px-12 text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-[140px] opacity-25"
      />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 w-64 h-64 bg-yellow-400 rounded-full blur-[120px] opacity-20"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05]"
          >
            Image Nigeria Event
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-6  mt-8"
          >
            {/* <p className="text-lg md:text-xl font-medium max-w-lg leading-relaxed opacity-90">
              <span className="text-purple-300 font-bold">Upcoming Event:</span>{" "}
              Nigeria Tertiary Institutions Arts and Crafts Expo (NTIAC)
            </p>

            <Link to={"/ntiac"}>
              <button className="w-fit bg-orange-500 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-customGreen transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                Register Now
              </button>
            </Link> */}

            <p>
              Celebrating Creativity, Elevating Nigeria – IMAGE NIGERIA EVENT
              crafts unforgettable experiences and high-profile awards to
              showcase Nigeria on the global stage.
            </p>

            {/* <img src="images/logo.jpeg" alt="" /> */}

            <a href="mailto:info@imagenigeriaevent.com">
              <button className="w-fit bg-orange-500 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-customGreen transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                <Mail className="inline mr-2" />
                Reach Us
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
          className="lg:col-span-4 order-1 lg:order-2 relative group mt-8 lg:mt-0"
        >
          <div className="absolute translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10 rounded-lg" />
          <img
            src="images/heroimg.jpg"
            alt="Vibrant Event Nigeria"
            className="w-full h-[300px] md:h-[450px] object-cover border-4 border-white rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
