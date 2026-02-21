import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Team from "../components/Team";

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

    useEffect(() => {
    if (location.hash === "#team") {
      const el = document.getElementById("team");
      if (el) {
        const yOffset = -100; // adjust for fixed navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="bg-black w-full min-h-screen text-white pt-20">
      {/* SECTION 1: THE FOUNDATION (Storytelling) */}
      <section className="min-h-screen flex items-center overflow-hidden py-24 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div variants={itemVariants} className="flex gap-5">
            <img
              src="/images/art1.jpeg"
              alt="About Hero 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <img
              src="/images/art2.jpeg"
              alt="About Hero 2"
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>
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
              <span className="text-orange-500 font-black  text-xl uppercase flex flex-col">
                About <span className="text-white">IMAGE NIGERIA EVENT</span>
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-xl">
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
      <div id="team">
      <Team />
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
