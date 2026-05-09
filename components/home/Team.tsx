"use client";

import { motion } from "framer-motion";
import { Star, Award, Heart } from "lucide-react";

const team = [
  {
    name: "Priya Sharma",
    role: "Lead Stylist & Founder",
    specialty: "Bridal Makeup & Hair",
    image: "/images/team1.jpg",
    experience: "12 years"
  },
  {
    name: "Rahul Verma",
    role: "Senior Hair Stylist",
    specialty: "Men's Grooming & Cuts",
    image: "/images/team2.jpg",
    experience: "8 years"
  },
  {
    name: "Anjali Patel",
    role: "Beauty Therapist",
    specialty: "Facials & Skincare",
    image: "/images/team3.jpg",
    experience: "6 years"
  },
  {
    name: "Karan Singh",
    role: "Makeup Artist",
    specialty: "Special Events & Fashion",
    image: "/images/team4.jpg",
    experience: "5 years"
  }
];

export default function Team() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="uppercase text-sm font-semibold text-yellow-600 mb-4 tracking-wider">
              Meet Our Team
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Beauty Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of certified professionals is dedicated to bringing out your natural beauty.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent z-10"></div>
                  {/* <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">
                      {member.name.charAt(0)}
                    </span>
                  </div> */}
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Star className="w-4 h-4 text-gray-700" />
                    </a>
                    <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Award className="w-4 h-4 text-gray-700" />
                    </a>
                    <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.specialty}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {member.experience} experience
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
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
          <p className="text-gray-600 mb-6">
            Want to join our talented team? We're always looking for passionate beauty professionals.
          </p>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300">
            Join Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}