"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "We use only the finest products and techniques to ensure exceptional results every time."
  },
  {
    icon: Clock,
    title: "Expert Stylists",
    description: "Our certified professionals bring years of experience and creativity to every service."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in beauty services with multiple industry awards."
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every client receives customized attention tailored to their unique beauty needs."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="uppercase text-sm font-semibold text-yellow-400 mb-4 tracking-wider">
              Why Choose Us
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover what sets us apart in delivering exceptional beauty experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5000+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Expert Stylists</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-300">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}