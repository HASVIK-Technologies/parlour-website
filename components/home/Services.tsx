"use client";

import config from "@/lib/config";
import Subtitle from "@/components/Subtitle";
import MainTitle from "@/components/MainTitle";
import Button from "../Button";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="flex flex-col md:flex-row md:pt-0 pb-12 md:pb-16">
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-auto"
        style={{
          backgroundImage: "url(/images/banner1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* RIGHT CONTENT */}
      <div
        className="w-full md:w-3/5"
        style={{
          background: "url(/images/background.png)",
        }}
      >
        <div
          className={`w-full h-full px-4 sm:px-6 md:px-10 lg:px-14 py-10 md:py-0 ${config.services.background}`}
        >
          <Subtitle text={config.services.mainSubtitle} />

          <MainTitle title={config.services.title} />

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {config.services.contents.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: (i + 1) * 0.15 }}
                viewport={{ once: true }}
                className="bg-transparent p-5 md:p-6 border border-black/20 rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {service.name}
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {service.description}
                </p>

                <h4 className="my-4 text-xl md:text-2xl font-semibold text-gray-900">
                  {service.price}
                </h4>

                <Button text="Book Now" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
