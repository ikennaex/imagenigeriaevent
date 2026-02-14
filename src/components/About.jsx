import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-black w-full min-h-screen flex items-center overflow-hidden py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Editorial Typography */}
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            {/* <span className="w-12 h-[2px] bg-orange-500"></span> */}
            <span className="text-orange-500 font-black tracking-[0.4em] text-xs uppercase">
              About Us
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-xl border-l-2 border-white/20 pl-8">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10">
              IMAGE NIGERIA EVENT is a Multi-dimensional, Multi-tasking creative
              events and awards idea driven organization that was established on
              the 30th of December, 2010. IMAGE NIGERIA EVENT is in the business
              of creating, initiating and executing high profile corporate,
              public and social events and awards independently or in
              collaboration, targeted at promoting Nigeria as a brand through
              event ideas.
            </p>

            <Link to="/about">
              <button className="group relative overflow-hidden bg-white px-10 py-4 transition-all">
                <span className="relative z-10 text-black font-black uppercase tracking-widest text-xs group-hover:text-white transition-colors duration-300">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Masked Image */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          viewport={{ once: true }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-orange-500 opacity-50 hidden md:block" />
          
          <div className="relative z-10 overflow-hidden shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gray-900"
            >
              <img
                src="/images/ekofestival.jpeg"
                alt="Tourism team and community"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;