"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { Camera, Star, Award } from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Ready for Your
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Transformation?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join thousands of satisfied clients who have experienced our premium beauty services. Your transformation story starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button text="Book Your Session" />
              <Button text="Get Consultation" type="secondary" />
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">Professional Photography</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">Award Winning</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Transformations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Artists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}