"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    before: "/images/before1.png",
    after: "/images/after1.png",
    title: "Hair Transformation",
    description: "Complete makeover with modern styling"
  },
  {
    before: "/images/before2.png",
    after: "/images/after2.png",
    title: "Bridal Glow",
    description: "Radiant skin and flawless makeup"
  },
  {
    before: "/images/before3.png",
    after: "/images/after3.png",
    title: "Style Evolution",
    description: "From casual to sophisticated elegance"
  }
];

export default function BeforeAfter() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="uppercase text-sm font-semibold text-yellow-600 mb-4 tracking-wider">
              Transformations
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Before & After
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the incredible transformations that showcase our expertise and dedication to beauty.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Before Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.before}
                    alt="Before transformation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">BEFORE</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-4">
                  <ArrowRight className="w-8 h-8 text-yellow-500" />
                </div>

                {/* After Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.after}
                    alt="After transformation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-semibold text-lg">AFTER</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            View More Transformations
          </button>
        </motion.div>
      </div>
    </section>
  );
}