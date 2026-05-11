"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import config from "@/lib/config";

export default function ServicesHero() {
  return (
    <section className="relative min-h-100 h-screen md:h-150 lg:h-175 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner2.jpg"
          alt="Services background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Premium Beauty&nbsp;
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-center leading-relaxed max-w-2xl mx-auto">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty and boost your confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button text="Book Appointment" href={config.brand.contact.whatsapp.link} />
              <Button text="View All Services" type="secondary" href="#services" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
    </section>
  );
}