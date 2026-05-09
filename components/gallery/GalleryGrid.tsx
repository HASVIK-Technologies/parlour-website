"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import VideoCard from "@/components/gallery/VideoCard";

const categories = ["All", "Hair", "Makeup", "Bridal", "Events"];

const galleryItems = [
  { id: "dQw4w9WgXcQ", category: "Hair", type: "video" },
  { id: "LXb3EKWsInQ", category: "Makeup", type: "video" },
  { id: "ScMzIvxBSi4", category: "Bridal", type: "video" },
  { id: "aqz-KE-bpKQ", category: "Events", type: "video" },
  { id: "LXb3EKWsInQ", category: "Hair", type: "video" },
  { id: "dQw4w9WgXcQ", category: "Makeup", type: "video" },
  { id: "ScMzIvxBSi4", category: "Bridal", type: "video" },
  { id: "aqz-KE-bpKQ", category: "Events", type: "video" },
  { id: "LXb3EKWsInQ", category: "Hair", type: "video" },
  { id: "dQw4w9WgXcQ", category: "Makeup", type: "video" },
  { id: "ScMzIvxBSi4", category: "Bridal", type: "video" },
  { id: "aqz-KE-bpKQ", category: "Events", type: "video" },
  { id: "LXb3EKWsInQ", category: "Hair", type: "video" },
  { id: "dQw4w9WgXcQ", category: "Makeup", type: "video" },
  { id: "ScMzIvxBSi4", category: "Bridal", type: "video" },
  { id: "aqz-KE-bpKQ", category: "Events", type: "video" }
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-64 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <VideoCard videoId={item.id} />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-lg font-semibold mb-2">{item.category}</div>
                  <div className="text-sm opacity-90">Click to view</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Load More Works
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}