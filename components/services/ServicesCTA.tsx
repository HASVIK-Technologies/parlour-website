"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function ServicesCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Book your appointment today and experience the premium beauty services that our clients rave about.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button text="Book Appointment" />
            <Button text="Call Now: +91 9454263965" type="secondary" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">Same Day</div>
              <div className="text-gray-300">Service Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Satisfaction Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}