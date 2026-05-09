"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, CheckCircle } from "lucide-react";

export default function BookingInfo() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Visit Our Salon
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    123 Beauty Street, Richmond Town<br />
                    Bangalore, Karnataka 560025<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                    <p>Sunday: 10:00 AM - 7:00 PM</p>
                    <p className="text-yellow-400 font-medium">24/7 Emergency Support</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Phone: +91 9454263965</p>
                    <p>WhatsApp: +91 9454263965</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">salon@glowbeauty.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=Bangalore&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6">Why Choose Our Salon?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Expert Stylists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Premium Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Modern Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Hygiene Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Flexible Booking</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}