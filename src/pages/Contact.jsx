import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="relative w-full min-h-screen pt-32 pb-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/* Decorative Blurs */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-300 rounded-full blur-3xl opacity-5 animate-pulse" /> */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-70 animate-pulse" />

      <div className="relative max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Let’s <span className="text-orange-500">Connect</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-md text-lg leading-relaxed"
          >
            Have a project in mind or want to collaborate in promoting Nigeria
            as a creative powerhouse? We’d love to hear from you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-gray-700"
          >
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-orange-500">
                Email
              </p>
              <a
                href="mailto:info@imagenigeriaevent.com"
                className="text-lg font-medium hover:text-orange-500 transition"
              >
                info@imagenigeriaevent.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-orange-500">
                Location
              </p>
              <p className="text-lg font-medium">Lagos, Nigeria</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-white/40"
        >
          <form className="space-y-8">

            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full bg-transparent border-b border-gray-300 focus:border-orange-500 outline-none py-3 placeholder-transparent"
                placeholder="Name"
              />
              <label className="absolute left-0 -top-5 text-xs text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange-500">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                className="peer w-full bg-transparent border-b border-gray-300 focus:border-orange-500 outline-none py-3 placeholder-transparent"
                placeholder="Email"
              />
              <label className="absolute left-0 -top-5 text-xs text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange-500">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="4"
                required
                className="peer w-full bg-transparent border-b border-gray-300 focus:border-orange-500 outline-none py-3 resize-none placeholder-transparent"
                placeholder="Message"
              ></textarea>
              <label className="absolute left-0 -top-5 text-xs text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange-500">
                Message
              </label>
            </div>

            <button className="group relative w-full bg-black text-white py-4 rounded-full overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              <span className="relative z-10 uppercase tracking-widest text-xs font-bold group-hover:text-black transition-colors duration-500">
                Send Message
              </span>
              <div className="absolute inset-0 bg-orange-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </button>

          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
