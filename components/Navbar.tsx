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
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 py-2 text-sm border-b border-gray-100 bg-white">
        <div className="text-gray-600">
          📞 +91 9454263965 &nbsp; | &nbsp; ✉️ salon@email.com
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <FaInstagram className="hover:scale-110 transition" />
          <FaFacebookF className="hover:scale-110 transition" />
          <FaWhatsapp className="hover:scale-110 transition" />
        </div>
      </div>

      {/* 🔹 NAVBAR (STICKY — SAME AS RM SUNCITY) */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="flex justify-between items-center px-6 md:px-12 py-4">
          {/* LOGO */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-black">
              {config.brand.name.split(" ")[0]}
            </span>{" "}
            <span className={config.theme.textGradient}>
              {config.brand.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {config.navigation.map((nav, i) => {
              const isActive = pathname === nav.link;

              return (
                <a
                  key={i}
                  href={nav.link}
                  className={`relative font-semibold transition ${
                    isActive
                      ? config.theme.textGradient
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {nav.label}

                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-4">
            <Button text="Book Now" />

            <button className="md:hidden" onClick={() => setOpen(!open)}>
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
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              {config.navigation.map((nav, i) => (
                <a
                  key={i}
                  href={nav.link}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-gray-800 hover:text-black"
                >
                  {nav.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
