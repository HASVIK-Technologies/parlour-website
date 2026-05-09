"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Phone } from "lucide-react";

export default function BookingHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h6 className="uppercase text-sm font-semibold text-yellow-400 mb-6 tracking-wider">
              Book Your Appointment
            </h6> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Reserve Your
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Beauty Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Schedule your premium beauty service with our expert stylists. Choose your preferred date, time, and service for a personalized experience.
            </p>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
                <p className="text-gray-300 text-sm">Book online or call us directly</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Timing</h3>
                <p className="text-gray-300 text-sm">Morning to evening slots available</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Instant Confirmation</h3>
                <p className="text-gray-300 text-sm">Get confirmed booking instantly</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
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