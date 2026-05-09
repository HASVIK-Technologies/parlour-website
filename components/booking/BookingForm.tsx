"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import config from "@/lib/config";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
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
📧 Email: ${form.email}
📞 Phone: ${form.phone}
💇 Service: ${form.service}
📅 Date: ${form.date}
⏰ Time: ${form.time}
📝 Notes: ${form.notes || "None"}
    `;

    const url = `https://wa.me/919454263965?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Fill Your Details
            </h2>
            <p className="text-lg text-gray-600">
              Complete the form below and we'll confirm your booking instantly
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-yellow-500" />
                  Personal Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full p-4 rounded-xl bg-gray-50 border outline-none transition-all duration-300 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-yellow-400 focus:bg-white"
                      }`}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full p-4 rounded-xl bg-gray-50 border outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-yellow-400 focus:bg-white"
                    }`}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service & Schedule */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
                  Service & Schedule
                </h3>

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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes
                  </label>
                  <textarea
                    placeholder="Any special requests or notes..."
                    rows={3}
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-400 focus:bg-white outline-none transition-all duration-300 resize-none"
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Confirm Booking
              </button>
            </motion.form>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Information</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>✓ Instant confirmation via WhatsApp</p>
                  <p>✓ Free consultation included</p>
                  <p>✓ Flexible rescheduling</p>
                  <p>✓ Premium service guarantee</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm">+91 9454263965</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm">salon@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm">Mon-Sun: 9AM-9PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}