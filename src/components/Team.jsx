import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Team = () => {
  return (
    <>
      <div className="text-center py-12 text-3xl font-bold">
        <span className="text-black font-black  text-xl uppercase flex flex-col">
          THE TEAM
        </span>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* <p className="text-orange-500 font-black tracking-[0.4em] text-xl uppercase mb-10">Leadership</p> */}
        <section className="mb-3 bg-white  p-3">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Image: Cinematic & Large */}
            <motion.div
              className="lg:col-span-4 order-1 lg:order-1"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.2, ease: "expo.out" }}
            >
              <div className="relative group">
                <img
                  src="/images/ceo.jpeg" // Replace with actual CEO image
                  className="w-full h-full object-bottom object-cover contrast-125"
                  alt="CEO Image Nigeria Event"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
            </motion.div>

            {/* CEO Text */}
            <div className="lg:col-span-10 order-1 lg:order-2 text-black">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-8">
                Benjamin Peters
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-md italic border-l-4 border-orange-500 pl-6">
                MD/ CEO, IMAGE NIGERIA EVENT
              </p>

              <Link to="/ceo">
                <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors duration-300">
                  Read Full Bio
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2.1: THE LEADERSHIP (Strategic partner Portrait) */}
        <section className="min-h-screen bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* CEO Image: Cinematic & Large */}
            <motion.div
              className="lg:col-span-4 order-2 lg:order-1"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.2, ease: "expo.out" }}
            >
              <div className="relative group">
                <img
                  src="/images/strategic.jpeg" // Replace with actual CEO image
                  className="w-full h-full object-bottom object-cover contrast-125"
                  alt="CEO Image Nigeria Event"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
            </motion.div>

            {/* CEO Text */}
            <div className="lg:col-span-10 order-2 lg:order-2 text-black">
              <h2 className="text-3xl md:text-5xl font-black  tracking-tighter leading-none mb-8">
                Adeola Balogun, Ph.D
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-md italic border-l-4 border-orange-500 pl-6">
                STRATEGIC CONSULTANT NTIAC PROJECT
              </p>

              <Link to="/partner">
                <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors duration-300">
                  Read Full Bio
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
