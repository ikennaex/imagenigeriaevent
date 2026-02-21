import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";

const OurWork = () => {
  const location = useLocation();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const services = [
    {
      title: "Event Creation & Execution",
      desc: "High-impact corporate, public and social experiences built to command attention.",
    },
    {
      title: "Awards Management",
      desc: "Prestigious award ceremonies that celebrate excellence and leadership.",
    },
    {
      title: "Brand Promotion",
      desc: "Creative event concepts that elevate Nigeria as a global brand.",
    },
    {
      title: "Strategic Collaboration",
      desc: "Partnership-driven events across leadership, tourism, culture and business.",
    },
    // {
    //   title: "Global Reach",
    //   desc: "Projecting Nigerian innovation and influence to the world stage.",
    // },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-[#fff8f2] to-[#ffeede]">
      
      {/* Floating Background Accents */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="relative flex flex-col lg:flex-row min-h-screen">

        {/* LEFT: Sticky Creative Image */}
        <motion.div
          className="relative w-full lg:w-5/12 h-[60vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="/images/art5.jpeg"
            alt="Tourism destination activation"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Big Bold Word */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-12 left-10"
          >
            <p className="text-white font-extrabold text-[12vw] leading-none opacity-10 uppercase select-none">
              Impact
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: Energetic Content */}
        <div className="w-full lg:w-7/12 px-6 py-10 md:px-16 lg:px-24 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Label */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 pb-4">
              {/* <span className="h-[3px] w-16 bg-orange-500"></span> */}
              <p className="text-[11px] font-bold text-orange-600">
                        <span className="text-black font-black  text-xl uppercase flex flex-col">
          WHAT WE DO
        </span>
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-3xl leading-tight mb-16 max-w-3xl"
            >
              We Create <span className="text-orange-500">Experiences</span> That 
              Move People and Elevate Nations.
            </motion.h2>

            {/* Service Cards */}
            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-black/5"
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            {/* {location.pathname === "/" && (
              <motion.div variants={fadeInUp} className="pt-20">
                <Link to="/ourwork" className="inline-block group relative">
                  <button className="relative overflow-hidden bg-black text-white px-16 py-6 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 hover:scale-105">
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                      Explore Our Work
                    </span>
                    <div className="absolute inset-0 bg-orange-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </button>
                </Link>
              </motion.div>
            )} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
