import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll + ESC close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Ntiac", link: "/ntiac" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-customGreen/80 backdrop-blur-xl py-3 border-b border-white/10"
          : "bg-customGreen py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <Link to="/" className="relative group">
            <img
              src="images/logo.png"
              alt="Logo"
              className="h-16 md:h-16 w-auto bg-white p-3 rounded-xl"
            />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {menu.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="text-[11px] uppercase tracking-[0.3em] text-white hover:text-orange-500 font-black transition-all"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger (hidden when open) */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-2"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className="h-0.5 bg-white block w-full" />
              <span className="h-0.5 w-2/3 bg-white block" />
              <span className="h-0.5 bg-white block w-full" />
            </div>
          </button>
        )}
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-customGreen z-[200] flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-white text-4xl font-light hover:text-orange-500 transition"
              >
                ×
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-1 items-center justify-center">
              <ul className="flex flex-col items-center gap-10">
                {menu.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      to={item.link}
                      className="text-4xl uppercase font-black tracking-tight text-white hover:text-orange-500 transition"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <Link
                    to="/contact"
                    className="text-orange-500 font-black uppercase tracking-widest border-b-2 border-orange-500 pb-2"
                    onClick={() => setOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
