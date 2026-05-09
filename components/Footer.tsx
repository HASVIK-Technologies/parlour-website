"use client";

import config from "@/lib/config";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-wide">
              <span className="text-white">
                {config.brand.name.split(" ")[0]}
              </span>{" "}
              <span className={config.theme.textGradient}>
                {config.brand.name.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              {config.brand.tagline}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-6 text-2xl">
              <a href="#" className="hover:scale-110 transition-all duration-300 hover:text-yellow-400 p-2 hover:bg-white/10 rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="hover:scale-110 transition-all duration-300 hover:text-yellow-400 p-2 hover:bg-white/10 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:scale-110 transition-all duration-300 hover:text-yellow-400 p-2 hover:bg-white/10 rounded-full">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              {config.navigation.map((nav, i) => (
                <li key={i}>
                  <a href={nav.link} className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <span className="text-yellow-400 text-lg">📞</span>
                <span className="font-medium">+91 9454263965</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <span className="text-yellow-400 text-lg">✉️</span>
                <span className="font-medium">salon@email.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <span className="text-yellow-400 text-lg">📍</span>
                <span className="font-medium">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            {config.footer.text}
          </div>
          <div className="text-gray-500 text-sm">
            Made with ❤️ for beauty enthusiasts
          </div>
        </div>
      </div>
    </footer>
  );
}
