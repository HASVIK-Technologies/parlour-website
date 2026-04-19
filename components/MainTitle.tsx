"use client";
import config from "@/lib/config";
import { motion } from "framer-motion";
export default function MainTitle({
  title,
  align,
  margin = "mb-10",
  theme = "light"
}: {
  title: string | string[];
  align?: "start" | "end" | "center";
  margin?: string;
  theme?: "light" | "dark"
}) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className={`text-3xl lg:text-4xl text-black font-semibold text-${align} ${margin}`}
    >
      {typeof title === "string" ? (
        <span className={config.theme.mainTitle[theme][0]}>{title}</span>
      ) : (
        title.map((text, i) => (
          <span
            key={i}
            className={
              config.theme.mainTitle[theme][i % config.theme.mainTitle[theme].length]
            }
          >
            {text}&nbsp;
          </span>
        ))
      )}
    </motion.h1>
  );
}
