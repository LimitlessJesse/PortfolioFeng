"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import styles from "./videoBackground.module.css";

interface VideoBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const VideoBackground = ({
  className,
  children,
  ...props
}: VideoBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "text-white-900",
          className
        )}
        {...props}
      >
        
          <video autoPlay muted loop className={styles.video}>         
            <source src="./videos/backgroundvideo.mp4" type="video/mp4"/>
          </video>
          {children}
        
      </div>
        
    </main>
  );
};