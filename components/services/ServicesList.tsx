"use client";

import { motion } from "framer-motion";
import { Clock, Star, Award } from "lucide-react";
import config from "@/lib/config";
import Button from "@/components/Button";

const serviceCategories = [
  {
    category: "Hair Services",
    services: [
      { name: "Hair Cut & Styling", price: "₹800", duration: "45 mins", rating: 4.9 },
      { name: "Hair Coloring", price: "₹2500", duration: "2 hours", rating: 4.8 },
      { name: "Hair Treatment", price: "₹1500", duration: "1 hour", rating: 4.9 },
      { name: "Bridal Hair", price: "₹3000", duration: "2 hours", rating: 5.0 }
    ]
  },
  {
    category: "Beauty Treatments",
    services: [
      { name: "Facial Treatment", price: "₹1200", duration: "1 hour", rating: 4.8 },
      { name: "Body Massage", price: "₹2000", duration: "1.5 hours", rating: 4.9 },
      { name: "Body Waxing", price: "₹2500", duration: "1 hour", rating: 4.7 },
      { name: "Manicure & Pedicure", price: "₹800", duration: "45 mins", rating: 4.8 }
    ]
  },
  {
    category: "Makeup Services",
    services: [
      { name: "Bridal Makeup", price: "₹8000", duration: "3 hours", rating: 5.0 },
      { name: "Party Makeup", price: "₹2500", duration: "1.5 hours", rating: 4.9 },
      { name: "Natural Makeup", price: "₹1500", duration: "1 hour", rating: 4.8 },
      { name: "HD Makeup", price: "₹3000", duration: "2 hours", rating: 4.9 }
    ]
  }
];

export default function ServicesList() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                    </div>
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </div>
                  </div>

                  <Button text="Book Now" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Specialized Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We also offer personalized consultations and custom beauty packages tailored to your specific needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600 mb-4">Free personalized beauty consultation</p>
              <span className="text-2xl font-bold text-yellow-600">Free</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bridal Package</h3>
              <p className="text-gray-600 mb-4">Complete bridal transformation package</p>
              <span className="text-2xl font-bold text-yellow-600">₹15,000</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monthly Plan</h3>
              <p className="text-gray-600 mb-4">Regular maintenance and care</p>
              <span className="text-2xl font-bold text-yellow-600">₹5,000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}