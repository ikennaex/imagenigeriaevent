import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-customGreen text-white overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-orange-400 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 pt-24 pb-14">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="inline-block bg-white p-4 rounded-2xl shadow-xl">
              <img
                src="images/logo.png"
                alt="Image Nigeria Event Logo"
                className="h-12"
              />
            </div>

            <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-sm">
              A multi-dimensional creative events and awards organization
              promoting Nigeria as a global brand through bold ideas and
              transformative experiences.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-orange-500 mb-8">
              Explore
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Our Work", path: "/ourwork" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-orange-500 mb-8">
              Services
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              {[
                "Event Creation",
                "Awards Management",
                "Brand Promotion",
                "Strategic Collaboration",
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-orange-500 mb-8">
              Contact
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="hover:text-white transition-colors">
                imagenigeriaevent@gmail.com
              </li>
              <li className="hover:text-white transition-colors">
                08023018637, 08035230776
              </li>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-orange-500 mb-8">
              Locations
            </h4>
              <li className="hover:text-white transition-colors">
                42, Olowu Str., off Obafemi Awolowo Way, Ikeja, Lagos.
              </li>
              <li className="hover:text-white transition-colors">
                Deo-Gratia Plaza Suit 24, (2nd Floor) Utako Abuja.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} Image Nigeria Event. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            {["Instagram", "Twitter", "LinkedIn"].map((social, index) => (
              <a
                key={index}
                href="#"
                className="relative group text-white/60 hover:text-orange-500 transition-colors duration-300"
              >
                {social}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
