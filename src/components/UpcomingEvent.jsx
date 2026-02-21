import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const UpcomingEvent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="pt-20 relative w-full py-28 md:py-36 overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white">
      {/* Soft Light Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="relative max-w-[1700px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:col-span-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-white/80 font-bold tracking-[0.4em] text-xs uppercase">
              Spotlight Event
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold leading-[0.95] mb-12"
          >
            Nigeria Tertiary <br />
            <span className="text-yellow-200">Arts & Crafts</span> <br />
            Expo <span className="text-white/60">(NTIAC)</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg md:text-xl text-white/90 leading-relaxed mb-14"
          >
            A vibrant celebration of creativity, culture, and innovation.
            Experience the artistic brilliance of Nigeria’s tertiary
            institutions brought to life through craft, performance, and bold
            imagination.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <button className="group relative overflow-hidden bg-white px-14 py-5 rounded-full transition-all duration-500 hover:scale-105">
              <Link to={"/ntiac"}>
                <span className="relative z-10 text-black font-bold uppercase tracking-widest text-xs transition-colors duration-500 group-hover:text-white">
                  Register Now
                </span>
              </Link>
              <div className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-6 relative">
          <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              src="/images/ntiacplain.jpeg"
              alt="NTIAC Expo"
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Date Card (glass dark style) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-8 right-8 bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-white/10"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-yellow-300">
                Coming Soon
              </p>
              <p className="text-2xl font-extrabold text-white mt-1">
                July 2026
              </p>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 left-8 bg-white text-orange-600 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Creative Energy
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
