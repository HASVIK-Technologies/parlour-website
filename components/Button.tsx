"use client";

import { motion } from "framer-motion";
import config from "@/lib/config";
import { IconType } from "react-icons";

export default function Button({
  text,
  appendIcon: Icon,
  type,
}: {
  text: string;
  appendIcon?: IconType;
  type?: "primary" | "secondary"
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center gap-2 cursor-pointer px-6 py-2 rounded-full font-semibold shadow-lg ${config.theme[`${type ?? 'primary'}Button`]}`}
    >
      {text}

      {Icon && <Icon className="text-sm" />}
    </motion.button>
  );
}
