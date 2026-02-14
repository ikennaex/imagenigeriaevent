import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-customGreen text-white overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-400 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-[1700px] mx-auto px-6 md:px-12 pt-10 pb-12">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-extrabold mb-6">
              IMAGE NIGERIA EVENT
            </h3>
            <p className="text-white/60 leading-relaxed">
              A multi-dimensional creative events and awards organization
              promoting Nigeria as a global brand through bold ideas and
              transformative experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500 mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link to="/ourwork" className="hover:text-orange-500 transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500 mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>Event Creation</li>
              <li>Awards Management</li>
              <li>Brand Promotion</li>
              <li>Strategic Collaboration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>info@imagenigeriaevent.com</li>
              <li>+234 000 000 0000</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} Image Nigeria Event. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
