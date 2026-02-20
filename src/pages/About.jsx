import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const AboutPage = () => {
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
    <main className="bg-black w-full min-h-screen text-white pt-20">
      {/* SECTION 1: THE FOUNDATION (Storytelling) */}
      <section className="min-h-screen flex items-center overflow-hidden py-24 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-8"
            >
              {/* <span className="w-12 h-[2px] bg-orange-500"></span> */}
              <span className="text-orange-500 font-black tracking-[0.4em] text-xl uppercase">
                About Us
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="max-w-xl border-l-2 border-white/20 pl-8"
            >
              <p className="text-lg md:text-2xl text-white font-light leading-relaxed mb-6">
                IMAGE NIGERIA EVENT is a Multi-dimensional, Multi-tasking
                creative events and awards idea driven organization that was
                established on the 30th of December, 2010.
              </p>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
                IMAGE NIGERIA EVENT is in the business of creating, initiating
                and executing high profile corporate, public and social events
                and awards independently or in collaboration, targeted at
                promoting Nigeria as a brand through event ideas.
              </p>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                Our unique idea driven events and awards events cuts across
                leadership, Governance at all tiers, Political, Socio-economic
                spheres, Tourism, Culture, Business, Sports and other
                perspectives of National Concern and value with the sole
                objective to promote National Development, integrating unity,
                Justice and Peace at the corporate, federal state and local
                government level.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="aspect-[4/5] bg-gray-900 overflow-hidden shadow-2xl">
              <img
                src="/images/ekofestival.jpeg"
                className="w-full h-full object-cover grayscale opacity-60"
                alt="Eko Festival"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE LEADERSHIP (CEO Portrait) */}
      <div className="flex flex-col lg:flex-row">
      {/* <p className="text-orange-500 font-black tracking-[0.4em] t ext-xl uppercase mb-10">Leadership</p> */}
      <section className="min-h-screen bg-white py-32 p-3">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* CEO Image: Cinematic & Large */}
          <motion.div
            className="lg:col-span-4 order-2 lg:order-1"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, ease: "expo.out" }}
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
      <section className="min-h-screen bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* CEO Image: Cinematic & Large */}
          <motion.div
            className="lg:col-span-4 order-2 lg:order-1"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, ease: "expo.out" }}
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
          <div className="lg:col-span-10 order-1 lg:order-2 text-black">
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

      {/* SECTION 3: STRATEGIC COLLABORATION (Diplomacy Gallery) */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Strategic <br />{" "}
              <span className="text-orange-500">Engagements</span>
            </h2>
            <p className="text-white/40 mt-4 uppercase tracking-widest text-xs">
              Photos from the strategic meeting between IMAGE Nigeria Event
              management and executives of the Lagos State Ministry of Tourism,
              Arts and Culture regarding NTIAC 2026.
            </p>
          </div>

          {/* Bento Grid Gallery for Government Meetings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-2 h-[400px] overflow-hidden bg-zinc-900"
            >
              <img
                src="/images/meeting1.jpeg"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Meeting with officials"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="h-[400px] overflow-hidden bg-zinc-900"
            >
              <img
                src="/images/meeting2.jpeg"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Official Engagement"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="h-[400px] overflow-hidden bg-zinc-900"
            >
              <img
                src="/images/meeting4.jpeg"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Official Engagement"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-2 h-[400px] overflow-hidden bg-zinc-900"
            >
              <img
                src="/images/meeting3.jpeg"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Official Engagement"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE MISSION (Closing Statement) */}
      <section className="py-32 bg-white text-black overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-12">
            Our <span className="text-orange-500">Mission</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-snug">
            Our ultimate mission is to strategically promote, project and
            celebrate the potentials and diversity of Nigeria in the Global
            Space as well as initiate trans-national events across all
            continents globally.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
