"use client";

import { useState } from "react";
import config from "@/lib/config";
import { motion } from "framer-motion";
import MainTitle from "./MainTitle";
import Subtitle from "./Subtitle";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.service || form.service === "Select Service")
      newErrors.service = "Select a service";
    if (!form.date) newErrors.date = "Select a date";
    if (!form.time) newErrors.time = "Select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    const message = `
✨ New Booking Request ✨

👤 Name: ${form.name}
💇 Service: ${form.service}
📅 Date: ${form.date}
⏰ Time: ${form.time}
    `;

    const url = `https://wa.me/${config.brand.contact.whatsapp.number}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Subtitle text={config.booking.subtitle} align="center" />
          <MainTitle title={config.booking.title} align="center" margin="mb-0" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-100"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  placeholder="Enter your full name"
                  className={`w-full p-4 rounded-xl bg-gray-50 border outline-none transition-all duration-300 ${
                    errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-yellow-400 focus:bg-white"
                  }`}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service *
                </label>
                <select
                  className={`w-full p-4 rounded-xl bg-gray-50 border outline-none transition-all duration-300 ${
                    errors.service
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-yellow-400 focus:bg-white"
                  }`}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option>Select a service</option>
                  {config.services.contents.map((s, i) => (
                    <option key={i} value={s.name}>
                      {s.name} - {s.price}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-400 focus:bg-white outline-none transition-all duration-300"
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-500 mt-1">{errors.date}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-400 focus:bg-white outline-none transition-all duration-300"
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                  {errors.time && (
                    <p className="text-xs text-red-500 mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {config.booking.buttonText}
              </button>
            </div>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps?q=Bangalore&output=embed"
              className="w-full h-96 lg:h-full min-h-[400px]"
              loading="lazy"
            />

            {/* Info Bar */}
            <div className="bg-white px-6 py-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Visit Our Salon</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Bangalore, India
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91 9454263965
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  salon@email.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
