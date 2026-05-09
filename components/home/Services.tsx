"use client";

import config from "@/lib/config";
import Subtitle from "@/components/Subtitle";
import MainTitle from "@/components/MainTitle";
import Button from "../Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Subtitle text={config.services.mainSubtitle} align="center" />
          <MainTitle title={config.services.title} align="center" margin="mb-0" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid xl:grid-cols-2 gap-6">
              {config.services.contents.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="col-span-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          {service.price}
                        </span>
                        <Button text="Book Now" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-96 sm:h-100 lg:h-120 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/banner1.jpg"
                alt="Beauty Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Services</h3>
                <p className="text-sm opacity-90">Expert care for your beauty</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
