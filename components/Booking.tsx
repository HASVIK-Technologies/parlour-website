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

    const url = `https://wa.me/919454263965?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 md:px-12 bg-black">
      <Subtitle text={config.booking.subtitle} align="center" />
      <MainTitle title={config.booking.title} align="center" theme="dark" />

      {/* MAIN GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/80 p-6 md:p-8 rounded-2xl space-y-5 border border-yellow-500/20"
        >
          {/* NAME */}
          <div>
            <input
              placeholder="Your Name"
              className={`w-full p-3 rounded-md bg-transparent text-yellow-300 placeholder-yellow-500 border outline-none
            ${
              errors.name
                ? "border-red-400"
                : "border-yellow-500/30 focus:border-yellow-400"
            }`}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          {/* SERVICE */}
          <div>
            <select
              className={`w-full p-3 rounded-md bg-transparent text-yellow-300 border outline-none
            ${
              errors.service
                ? "border-red-400"
                : "border-yellow-500/30 focus:border-yellow-400"
            }`}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option className="text-black">Select Service</option>
              {config.services.contents.map((s, i) => (
                <option key={i} className="text-black">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* DATE & TIME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              className="w-full p-3 rounded-md bg-transparent text-yellow-300 border border-yellow-500/30 focus:border-yellow-400 outline-none"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <input
              type="time"
              className="w-full p-3 rounded-md bg-transparent text-yellow-300 border border-yellow-500/30 focus:border-yellow-400 outline-none"
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className={`w-full py-3 rounded-full font-semibold text-black ${config.theme.buttonGradient}`}
          >
            {config.booking.buttonText}
          </button>
        </motion.form>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-yellow-500/20"
        >
          <iframe
            src="https://www.google.com/maps?q=Bangalore&output=embed"
            className="w-full h-[350px] md:h-full"
            loading="lazy"
          />

          {/* SIMPLE INFO BAR */}
          <div className="bg-black px-4 py-4 border-t border-yellow-500/20 text-sm text-gray-300">
            <p>📍 Bangalore, India</p>
            <p>📞 +91 9454263965</p>
            <p>✉️ salon@email.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
