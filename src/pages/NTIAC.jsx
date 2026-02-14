import React from "react";
import { motion } from "framer-motion";

const NTIAC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="bg-white w-full min-h-screen font-light text-black overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 w-full text-white py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[75vh]">
          
          <motion.div 
            className="lg:col-span-7 space-y-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 }}}}
          >
            <motion.p 
              variants={fadeInUp} 
              className="text-xs uppercase tracking-[0.4em] font-medium opacity-80"
            >
              Upcoming Program
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl md:text-6xl font-extralight tracking-tight leading-[1.1]"
            >
              Nigerian Tertiary Institutions  
              <br />
              Arts and Crafts Expo  
              <span className="block font-normal mt-2 text-orange-200">
                (NTIAC 2026)
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="pt-6">
              <a 
                href="#register" 
                className="inline-block bg-white text-orange-600 px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium rounded-full hover:scale-105 hover:shadow-xl transition-all duration-500"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="lg:col-span-5 h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6 }}
          >
            <img 
              src="/images/ntiacbanner.jpeg"
              alt="NTIAC Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-[1000px] mx-auto px-6">

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] font-medium text-gray-400">
                About the Event
              </h2>
              <div className="w-16 h-[2px] bg-orange-500"></div>
            </div>
            
            <div className="space-y-8 text-gray-700 leading-[1.9] text-base font-light border-l-2 border-orange-200 pl-10">
              <p>
                THE NIGERIA TERTIARY INSTITUTIONS ARTS AND CRAFTS EXPO 2026 is a creative, innovative and strategic event concept proudly initiated by IMAGE NIGERIA EVENT.
              </p>
              <p>
                NTIAC is designed to celebrate, expose, showcase and project to Nigeria, Africa and the world the astonishing creative artistic and craftsmanship prowess of talented youths under one unified event platform.
              </p>
              <p>
                Across tertiary institutions in Nigeria offering Fine and Applied Arts and Crafts, there exists a powerful concentration of skill, talent and innovation. NTIAC provides global endorsement, recognition and acceptance for these outstanding works.
              </p>
            </div>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {[
              "/images/expodisplay1.jpeg",
              "/images/expodisplay2.jpeg",
              "/images/expodisplay3.jpeg",
              "/images/expodisplay4.jpeg",
            ].map((src, i) => (
              <div 
                key={i}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={src} 
                  alt="Expo display" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default NTIAC;
