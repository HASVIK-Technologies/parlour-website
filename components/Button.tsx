"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

export default function Button({
  text,
  appendIcon: Icon,
  type,
  href,
}: {
  text: string;
  appendIcon?: IconType;
  type?: "primary" | "secondary";
  href?: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className={`flex items-center justify-center gap-3 cursor-pointer px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
        type === 'secondary'
          ? 'border-2 border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 bg-white'
          : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black'
      }`}
    >
      {text}

      {Icon && <Icon className="text-lg" />}
    </motion.a>
  );
}
