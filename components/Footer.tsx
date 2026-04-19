"use client";

import config from "@/lib/config";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-6 md:px-12">
      <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">
              {config.brand.name.split(" ")[0]}
            </span>{" "}
            <span className={config.theme.textGradient}>
              {config.brand.name.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            {config.brand.tagline}
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-lg">
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            {config.navigation.map((nav, i) => (
              <li key={i}>
                <a href={nav.link} className="hover:text-white transition">
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Us
          </h3>

          <div className="space-y-2 text-gray-400 text-sm">
            <p>📞 +91 9454263965</p>
            <p>✉️ salon@email.com</p>
            <p>📍 Your Salon Address</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm">
        {config.footer.text}
      </div>
    </footer>
  );
}
