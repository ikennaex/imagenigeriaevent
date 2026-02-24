import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Team = () => {
  return (
    <div className="bg-white py-4">

      {/* Section Title */}
      <div className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-black">
          The Team
        </h2>
      </div>

      {/* Wrapper */}
      <div className="space-y-32">

        {/* ===== MEMBER BLOCK ===== */}
        <section>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 
                          grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/ceo.jpeg"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-bottom"
                  alt="Benjamin Peters"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
            </motion.div>

            {/* Text */}
            <div className="lg:col-span-7 text-black">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                Benjamin Peters
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 
                            font-medium border-l-4 border-orange-500 pl-6 max-w-xl">
                MD / CEO, IMAGE NIGERIA EVENT
              </p>

              <Link to="/ceo">
                <button className="mt-8 px-10 py-4 bg-orange-500 text-white 
                                   font-black uppercase tracking-widest text-xs 
                                   hover:bg-orange-600 transition-colors duration-300">
                  Read Full Bio
                </button>
              </Link>
            </div>
          </div>
        </section>


        {/* ===== MEMBER BLOCK 2 ===== */}
        <section>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 
                          grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <motion.div
              className="lg:col-span-5 lg:order-2"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/strategic.jpeg"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-bottom"
                  alt="Adeola Balogun"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
            </motion.div>

            <div className="lg:col-span-7 lg:order-1 text-black">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
                Adeola Balogun, Ph.D
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 
                            font-medium border-l-4 border-orange-500 pl-6 max-w-xl">
                Strategic Consultant, NTIAC Project
              </p>

              <Link to="/partner">
                <button className="mt-8 px-10 py-4 bg-orange-500 text-white 
                                   font-black uppercase tracking-widest text-xs 
                                   hover:bg-orange-600 transition-colors duration-300">
                  Read Full Bio
                </button>
              </Link>
            </div>
          </div>
        </section>


        {/* ===== MEMBER BLOCK 3 ===== */}
        <section>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 
                          grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <motion.div
              className="lg:col-span-5"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/content-developer.jpeg"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-bottom"
                  alt="Babafunsho Adekunle"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
            </motion.div>

            <div className="lg:col-span-7 text-black">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
                Babafunsho Adekunle
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 
                            font-medium border-l-4 border-orange-500 pl-6 max-w-xl">
                Marketing Consultant
              </p>

              <Link to="/contentdev">
                <button className="mt-8 px-10 py-4 bg-orange-500 text-white 
                                   font-black uppercase tracking-widest text-xs 
                                   hover:bg-orange-600 transition-colors duration-300">
                  Read Full Bio
                </button>
              </Link>
            </div>
          </div>
        </section>


        {/* ===== MEMBER BLOCK 4 ===== */}
        <section>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 
                          grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <motion.div
              className="lg:col-span-5 lg:order-2"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/sculptor.png"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-bottom"
                  alt="Adenle John Oyewole"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
            </motion.div>

            <div className="lg:col-span-7 lg:order-1 text-black">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
                Adenle John Oyewole
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 
                            font-medium border-l-4 border-orange-500 pl-6 max-w-xl">
                Sculpture, Art Education, Fellow of Art in Medicine
              </p>

              <Link to="/sculptor">
                <button className="mt-8 px-10 py-4 bg-orange-500 text-white 
                                   font-black uppercase tracking-widest text-xs 
                                   hover:bg-orange-600 transition-colors duration-300">
                  Read Full Bio
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;