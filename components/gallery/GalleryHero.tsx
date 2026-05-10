"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative min-h-100 h-screen md:h-150 lg:h-175 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/banner3.jpg"
              alt="Services background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"></div>
          </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h6 className="uppercase text-sm font-semibold text-yellow-400 mb-6 tracking-wider">
              Our Gallery
            </h6> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 mx-auto text-center">
              Crafting Beauty
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                &nbsp;Masterpieces
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-center leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of stunning transformations and witness the
              artistry that defines our beauty expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button text="View Portfolio" />
              <Button text="Book Consultation" type="secondary" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl"
      ></motion.div>
    </section>
  );
}
