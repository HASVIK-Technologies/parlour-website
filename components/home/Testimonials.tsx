"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    content: "The most luxurious salon experience I've ever had. The attention to detail and professionalism is unmatched.",
    rating: 5,
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Bride",
    content: "My bridal makeup was absolutely perfect. The team made me feel so confident and beautiful on my special day.",
    rating: 5,
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Emma Davis",
    role: "Fashion Model",
    content: "Professional, creative, and always on trend. They understand beauty at the highest level.",
    rating: 5,
    image: "/images/testimonial3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="uppercase text-sm font-semibold text-yellow-600 mb-4 tracking-wider">
              Client Love
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients who trust us with their beauty needs.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Quote className="text-yellow-400 text-2xl mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}