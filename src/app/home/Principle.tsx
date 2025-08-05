"use client";
import React from "react";

type Props = {};
import { FaArrowRight, FaList, FaListCheck } from "react-icons/fa6";
import Link from "next/link";
import { FaCog, FaCogs, FaPaintBrush } from "react-icons/fa";
import { PiHandshakeBold } from "react-icons/pi";
import { BsChatDotsFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { motion } from "motion/react";
export default function Principle({}: Props) {
  return (
    <section id="principle">
      <div className="l">
        <img src="/g/halo.png" alt="" />
      </div>
      <div className="r">
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <FaCog />
          </motion.div>{" "}
          <p>Responsive. Reliable. Easy to Work With.</p>
        </div>
        <div className="point">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic
            className="drag"
          >
            <FaListCheck />
          </motion.div>{" "}
          <p>Your Feedback Shapes the Final Result.</p>
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
          <p>Flexible Pricing. Flexible Plans.</p>
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

          <p>Constant Communication, Clear Workflow .</p>
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
          <p>We Respect Your Deadline.</p>
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
          <p>Your Model, Your Way</p>
        </div>
      </div>
    </section>
  );
}
