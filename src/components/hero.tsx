"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "@/context";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const imageAnimation = {
    opacity: [0, 1],
    scale: [0.8, 1],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      className="flex flex-col sm:flex-row lg:h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
            Hey, there
          </p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <Image
              src="/hand-wave.svg"
              width={40}
              height={40}
              alt="hand-waving"
              priority
            />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: easeInOut }}
        >
          <p className="text-white/60 inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Kabiru Akeem
          </span>
          <p>a Software Engineer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: easeInOut }}
          className="text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6"
        >
          Specialize in building intuitive, high-performance web and mobile
          applications.
        </motion.p>
      </div>

      {/* IMAGE */}
      <motion.div
        className="flex items-center justify-center"
        animate={imageAnimation}
      >
        <Image
          src="/kabby.jpeg"
          width={400}
          height={400}
          alt="kabby"
          className="w-[90%] max-w-[400px] rounded-lg shadow-lg"
          quality={100}
          priority
        />
      </motion.div>
    </section>
  );
}
