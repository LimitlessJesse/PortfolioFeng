"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { AuroraBackground } from "./components/ui/aurora-backgroud";
import { motion } from "framer-motion";
import Links from "./components/Links";

export default function page(){
  return(
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
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto">
            
            <Navbar />
            <HeroSection />
            
          </div>
          <div className="max-w-7xl mx-auto mt-20"> 
            <Links />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>

  );
}