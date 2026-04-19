"use client";

import config from "@/lib/config";
import { motion } from "framer-motion";

export default function Subtitle({
  text,
  align,
}: {
  text: string;
  align?: "start" | "end" | "center";
}) {
  return (
    <motion.h6
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className={`uppercase mb-4 font-semibold ${config.theme.mainSubtitle} text-${align || "start"}`}
      style={{ letterSpacing: "0.2rem" }}
    >
      {text}
    </motion.h6>
  );
}
