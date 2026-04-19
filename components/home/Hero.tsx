"use client";

import Image from "next/image";
import config from "@/lib/config";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import MainTitle from "@/components/MainTitle";

export default function Hero() {
  return (
    <section
      className={`relative md:max-h-156`}
      style={{
        background: "url(/images/background.png)",
      }}
    >
      <div className={`${config.hero.background} px-3 pt-3 pb-12 h-full w-full`}>
        {/* IMAGES */}
        <div className="h-100 md:h-120 flex">
          {/* IMAGE 1 */}
          <div className="relative w-1/3 h-full">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0% 0%, 78% 0%, 100% 74%, 0% 58%)",
              }}
            >
              <Image
                src={`/images/${config.hero.images[0]}`}
                alt="Bridal"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* IMAGE 2 */}
          <div className="relative w-1/3 h-full z-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -left-[20%] right-0 bottom-[1%] md:bottom-0 top-0"
              style={{
                clipPath: "polygon(0% 0%, 78% 0%, 100% 90%, 19% 75%)",
              }}
            >
              <Image
                src={`/images/${config.hero.images[1]}`}
                alt="Facial"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* IMAGE 3 */}
          <div className="relative w-1/3 h-full z-20">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-[24%] right-0 -bottom-[5%] md:-bottom-[28%] top-0"
              style={{
                clipPath:
                  "polygon(100% 0%, 100% 100%, 76% 95%, 49% 90%, 26% 86%, 0% 0%)",
              }}
            >
              <Image
                src={`/images/${config.hero.images[2]}`}
                alt="Hair"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* TEXT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-30 max-w-120 mx-5 mt-0 md:-mt-28"
        >
          <Subtitle text={config.hero.mainSubtitle} />

          <MainTitle title={config.hero.title} margin="mb-3" />

          <p className="mt-4 text-gray-700 text-md">{config.hero.subtitle}</p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Button
              text={config.hero.ctaPrimary}
              appendIcon={FaArrowRightLong}
            />
            <Button
              text={config.hero.ctaSecondary}
              type="secondary"
              appendIcon={FaArrowRightLong}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
