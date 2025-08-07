"use client";
import { Media } from "@/payload-types";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  ml: Media[];
};

export default function AboutCarousel({ ml }: Props) {
  const [active, setActive] = useState(0);
  // const activeRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   console.log("loading in");
  //   if (activeRef.current) {
  //     const img = new Image();
  //     activeRef.current.classList.add("loading");
  //     img.src = activeRef.current.getAttribute("data-src") ?? "";

  //     img.onload = () => {
  //       if (activeRef.current) {
  //         activeRef.current.src = img.src;
  //         activeRef.current.classList.remove("loading");
  //         console.log("loading in");
  //       }
  //     };
  //   }
  // }, [active, activeRef]);
  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.img
          className="loading"
          src={
            ml[active].sizes?.small?.url ??
            ml[active].url ??
            "/g/placeholder2.png"
          }
          initial={{
            clipPath: "inset(0% 100% 0 0)",
          }}
          animate={{
            clipPath: "inset(0% 0% 0 0)",
          }}
          exit={{
            clipPath: "inset(0% 0% 0 100%)",
          }}
          alt=""
          key={ml[active].id}
        />
      </AnimatePresence>
      <div className="controls">
        {ml?.map((m, i) => {
          return (
            <button
              className={`btn btn-l ${i === active ? "active" : ""}`}
              key={"btn-carousel" + i}
              onClick={() => {
                setActive(i);
              }}
            >
              {" "}
            </button>
          );
        })}
      </div>
    </>
  );
}
