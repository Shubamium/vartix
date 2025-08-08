"use client";
import { useMotionValue, useSpring, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import "./customCursor.scss";
type Props = {};

export default function CustomCursor({}: Props) {
  const circRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 300, damping: 20 });
  const ys = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      x.set(e.clientX - 40);
      y.set(e.clientY - 40);
    });
    window.addEventListener("click", () => {
      if (circRef.current) {
        circRef.current.classList.remove("click");
        circRef.current.classList.add("click");
        setTimeout(() => {
          circRef.current?.classList.remove("click");
        }, 100);
      }
    });
  }, []);
  return (
    <div id="cursor">
      <motion.div
        className={`circ`}
        ref={circRef}
        style={{ x: xs, y: ys }}
      ></motion.div>
    </div>
  );
}
