"use client";
import MouseMoveScale from "@/app/components/mouseMoveScale/MouseMoveScale";
import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";

type Props = {};

export default function EffectorHero({}: Props) {
  const [mos, setMos] = useState([0, 0]);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  useEffect(() => {
    const init = () => {
      window.addEventListener("mousemove", (e: MouseEvent) => {
        const offsetX = eval((e.clientX / window.innerWidth / 2).toFixed(2));
        const offsetY = eval((e.clientY / window.innerHeight).toFixed(2));
        x.set(offsetX);
        y.set(offsetY);

        setMos([offsetX, offsetY]);
        console.log(offsetX, offsetY);
      });
    };
    init();
    window.onresize = () => {
      init();
    };
  }, []);

  const springX = useSpring(x, { stiffness: 300, damping: 45, mass: 1 });
  const springY = useSpring(y, { stiffness: 300, damping: 45, mass: 1 });

  const charX = useTransform(springX, [0, 1], [20, -20]);
  const charY = useTransform(springY, [0, 1], [20, -20]);

  const bdX = useTransform(springX, [0, 1], [-70, 70]);
  const bdY = useTransform(springY, [0, 1], [-70, 70]);

  const vdX = useTransform(springX, [0, 1], [100, -100]);
  const vdY = useTransform(springY, [0, 1], [100, -100]);
  const vdBX = useTransform(springX, [0, 1], [130, -130]);
  const vdBY = useTransform(springY, [0, 1], [130, -130]);

  const dashX = useTransform(springX, [-0.5, 1], [80, -80]);
  const dashY = useTransform(springY, [0, 1], [80, -80]);
  return (
    <section id="hero">
      <div className="heading">
        <div className="text">
          <h2 className="ht">
            OUR <span>MISSION</span>
          </h2>
          <h2 className="hb">
            OUR{" "}
            <span className="hstroke">
              VALUES{" "}
              <svg
                width="342"
                height="36"
                viewBox="0 0 342 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 32.5932C3 32.4104 3 32.2276 47.2339 27.381C91.4678 22.5345 179.936 13.0297 230.536 8.13324C281.137 3.23682 291.191 3.23682 296.735 3.14543C302.279 3.05404 303.011 2.87125 303.204 3.14266C306.111 7.21224 292.52 12.8192 289.465 15.3228C288.337 16.2475 287.518 17.0786 286.967 18.0922C286.684 18.6136 286.05 18.9231 292.44 18.3803C298.829 17.8374 312.172 16.3752 321.788 15.5305C331.403 14.6858 336.887 14.503 339.163 14.683C340.545 14.7923 334.095 17.6214 324.604 20.3881C311.224 24.2885 302.878 25.5698 299.889 26.4976C299.265 26.6914 310.316 27.237 324.898 27.6053C330.157 27.7909 331.071 27.9737 331.816 28.0678C332.561 28.162 333.109 28.162 333.674 28.162"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>
        <div className="jaws">
          <svg
            width="151"
            height="174"
            viewBox="0 0 151 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.1221 86.6719L0.499992 172.66L0.5 0.499993L149.904 0.5L75.1221 86.6719Z"
              stroke="white"
              strokeOpacity="0.09"
            />
          </svg>
          <svg
            width="151"
            height="174"
            viewBox="0 0 151 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.1221 86.6719L0.499992 172.66L0.5 0.499993L149.904 0.5L75.1221 86.6719Z"
              stroke="white"
              strokeOpacity="0.09"
            />
          </svg>
          <svg
            width="151"
            height="174"
            viewBox="0 0 151 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.1221 86.6719L0.499992 172.66L0.5 0.499993L149.904 0.5L75.1221 86.6719Z"
              stroke="white"
              strokeOpacity="0.09"
            />
          </svg>
        </div>
      </div>

      <div className="effecter">
        <MouseMoveScale className="char" offset={7}>
          <motion.img
            src="/d/3dplace.png"
            className="char"
            alt=""
            // style={{
            //   translate: `${mos[0] * -50}px  ${mos[1] * -50}px`,
            // }}
            style={{
              x: charX,
              y: charY,
            }}
          />
        </MouseMoveScale>
        <MouseMoveScale className="backdrop" offset={0.5}>
          <motion.div
            style={{
              x: bdX,
              y: bdY,
            }}
          ></motion.div>
        </MouseMoveScale>
        <motion.div
          style={{ x: dashX, y: dashY }}
          className="stroke"
        ></motion.div>
        <motion.video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
          className="vid l"
          style={{
            x: vdX,
            y: vdY,
          }}
        ></motion.video>

        <motion.video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
          className="vid r"
          style={{
            x: vdBX,
            y: vdBY,
          }}
        ></motion.video>
      </div>
    </section>
  );
}
