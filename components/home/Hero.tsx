"use client";

import Image from "next/image";
import config from "@/lib/config";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import MainTitle from "@/components/MainTitle";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <Subtitle text={config.hero.mainSubtitle} />

            <MainTitle title={config.hero.title} margin="mb-6" />

            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              {config.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                text={config.hero.ctaPrimary}
                href={config.brand.contact.whatsapp.link}
                appendIcon={FaArrowRightLong}
              />
              <Button
                text={config.hero.ctaSecondary}
                type="secondary"
                href="/services"
                appendIcon={FaArrowRightLong}
              />
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`/images/${config.hero.images[1]}`}
                  alt="Beauty Service"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Image
                  src={`/images/${config.hero.images[0]}`}
                  alt="Bridal Service"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Image
                  src={`/images/${config.hero.images[2]}`}
                  alt="Hair Service"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
