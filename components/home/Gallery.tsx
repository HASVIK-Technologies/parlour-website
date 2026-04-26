"use client";

import config from "@/lib/config";
import { motion } from "framer-motion";
import VideoCard from "@/components/gallery/VideoCard";
import MainTitle from "@/components/MainTitle";
import Subtitle from "@/components/Subtitle";

export default function Gallery() {
  return (
    <section id="gallery" className="py-8 md:py-12 px-4 sm:px-6 bg-black">
      <Subtitle text={config.gallery.subtitle} align="center" />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mt-10">
        {/* LEFT BIG CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 lg:col-span-8 relative rounded-2xl overflow-hidden aspect-16/10"
        >
          <VideoCard videoId={config.gallery.highlightVideo} big />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 p-4 md:p-6 z-10">
            <MainTitle title={config.gallery.title} theme="dark" />
          </div>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="md:col-span-5 lg:col-span-4 grid grid-cols-2 gap-3 md:gap-4">
          {config.gallery.videos.map((id: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-xl overflow-hidden aspect-4/3"
            >
              <VideoCard videoId={id} />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <span className="text-xs md:text-sm tracking-wide">
                  View Style
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
