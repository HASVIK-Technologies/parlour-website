"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import config from "@/lib/config";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 🔹 TOP BAR (NORMAL FLOW) */}
      <div className="hidden lg:flex justify-between items-center px-6 lg:px-12 py-1 text-sm border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="text-gray-600 flex items-center gap-4">
          <span className="flex items-center gap-1">
            📞 <span className="font-medium">+91 9454263965</span>
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            ✉️ <span className="font-medium">salon@email.com</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <a href={config.brand.contact.instagram.link} className="hover:scale-110 transition-transform duration-200 hover:text-yellow-600">
            <FaInstagram size={18} />
          </a>
          <a href={config.brand.contact.facebook.link} className="hover:scale-110 transition-transform duration-200 hover:text-yellow-600">
            <FaFacebookF size={18} />
          </a>
          <a href={config.brand.contact.whatsapp.link} className="hover:scale-110 transition-transform duration-200 hover:text-yellow-600">
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>

      {/* 🔹 NAVBAR (STICKY — SAME AS RM SUNCITY) */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="flex justify-between items-center px-6 lg:px-12 py-2">
          {/* LOGO */}
          <h1 className="text-2xl lg:text-3xl font-bold tracking-wide hover:scale-105 transition-transform duration-300">
            <span className="text-gray-900">
              {config.brand.name.split(" ")[0]}
            </span>{" "}
            <span className={config.theme.textGradient}>
              {config.brand.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {config.navigation.map((nav, i) => {
              const isActive = pathname === nav.link;

              return (
                <a
                  key={i}
                  href={nav.link}
                  className={`relative font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? config.theme.textGradient
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {nav.label}

                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-4">
            <Button text="Book Now" href={config.brand.contact.whatsapp.link} />

            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl overflow-hidden border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-4">
                {config.navigation.map((nav, i) => (
                  <a
                    key={i}
                    href={nav.link}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    {nav.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
