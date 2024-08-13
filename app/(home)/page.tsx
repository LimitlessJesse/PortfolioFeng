"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { AuroraBackground } from "./components/ui/aurora-backgroud";
import { motion } from "framer-motion";
import Links from "./components/Links";
import Image from "next/image";

export default function page() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 px-4"
      >


        <div className="max-w-7xl mx-auto">

          <Navbar />
          <HeroSection />

        </div>


        <nav className=" flex flex-col items-center mt-5">
          <Image src="/images/bioImage.jpg"
            className=""
            alt="background image"
            width="1280"
            height="1570"
            fill={false}
            priority={true}
            style={{ position: "absolute", zIndex: -1, }} />
          <Links />
        </nav>

      </motion.div>
    </AuroraBackground>

  );
}