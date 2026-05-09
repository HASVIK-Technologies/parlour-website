"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { useState } from "react";
import config from "@/lib/config";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image as Fallback */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${isPlaying ? "hidden" : "block"}`}
        style={{
          backgroundImage: "url('/images/banner2.jpg')",
        }}
      ></div>

      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onError={() => setIsPlaying(false)}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        {/* Fallback to YouTube iframe if video file doesn't exist */}
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-[#CFAF6D] via-[#FFD700] to-[#CFAF6D] bg-clip-text text-transparent">
              Luxury Beauty
            </span>
          </h1>

          <p className="text-base sm:text-lg xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Step into a world of elegance, relaxation, and transformation. Where every moment is crafted for your ultimate beauty experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Book Your Experience" href={config.brand.contact.whatsapp.link} />
            <Button text="Explore Services" type="secondary" href="/services" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
