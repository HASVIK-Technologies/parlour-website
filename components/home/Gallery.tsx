"use client";

import config from "@/lib/config";
import { motion } from "framer-motion";
import VideoCard from "@/components/gallery/VideoCard";
import MainTitle from "@/components/MainTitle";
import Subtitle from "@/components/Subtitle";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Subtitle text={config.gallery.subtitle} align="center" />
          <MainTitle title={config.gallery.title} align="center" theme="dark" margin="mb-0" />
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Big Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative rounded-2xl overflow-hidden aspect-video shadow-2xl"
          >
            <VideoCard videoId={config.gallery.highlightVideo} big />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-8 z-10 bg-gradient-to-t from-black/80 to-transparent w-full">
              <MainTitle title={config.gallery.title} theme="dark" margin="mb-2" />
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                {config.gallery.highlightDescription}
              </p>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {config.gallery.videos.slice(0, 4).map((id: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden aspect-square shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <VideoCard videoId={id} />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center group">
                  <span className="text-white font-semibold text-sm lg:text-base tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Style
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Grid Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {config.gallery.videos.slice(4).map((id: string, i: number) => (
            <div
              key={i + 4}
              className="relative rounded-xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <VideoCard videoId={id} />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center group">
                <span className="text-white font-semibold text-xs lg:text-sm tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View Style
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
