"use client";
import React from "react";

type Props = {};
import { FaArrowRight, FaList, FaListCheck } from "react-icons/fa6";
import Link from "next/link";
import { FaCog, FaCogs, FaPaintBrush, FaTools } from "react-icons/fa";
import { PiHandshakeBold } from "react-icons/pi";
import { BsChatDotsFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { motion } from "motion/react";
export default function Principle({}: Props) {
  return (
    <section id="principle">
      <div className="r">
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <FaListCheck />
          </motion.div>{" "}
          <p>When you’re happy, we’re happy too</p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <FaCog />
          </motion.div>{" "}
          <p>
            We believe quality isn’t just something you see - it’s something you
            feel
          </p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <PiHandshakeBold />
          </motion.div>
          <p> Clear workflow, constant communication</p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <BsChatDotsFill />
          </motion.div>

          <p>Your feedback matters</p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <CgSandClock />
          </motion.div>
          <p>Hand-painted textures in your model's style</p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <FaTools />
          </motion.div>
          <p>We know what works in practice, not just in theory</p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <FaPaintBrush />
          </motion.div>
          <p> We build models with both beauty and functionality in mind</p>
        </div>
      </div>
      <div className="l">
        <img src="https://minio-api.venmiart.com/vartix/pointnew.webp" alt="" />
      </div>
    </section>
  );
}
