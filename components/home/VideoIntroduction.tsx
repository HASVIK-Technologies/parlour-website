"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function VideoSection() {
  return (
    <section className="relative w-full p-0 h-[70vh] md:h-screen max-h-200 overflow-hidden bg-black">
      {/* VIDEO */}
      <iframe
        className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src="https://www.youtube.com/embed/-FnrCZJw6TE?autoplay=1&mute=1&controls=0&loop=1&playlist=-FnrCZJw6TE&modestbranding=1&showinfo=0"
        title="Salon Video"
        allow="autoplay"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GOLD GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Experience{" "}
            <span className="bg-gradient-to-r from-[#CFAF6D] via-[#FFD700] to-[#CFAF6D] bg-clip-text text-transparent">
              Luxury Beauty
            </span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Step into a world of elegance, relaxation, and transformation.
          </p>

          <div className="flex justify-center mt-6">
            <Button text="Book Your Experience" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
