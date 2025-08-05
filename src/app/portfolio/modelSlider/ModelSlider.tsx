"use client";

import { i, image } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa6";

type Props = {};

const il = [
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
  "/g/render_1.png",
];

const co = ["lb", "lc", "center", "rc", "rb"];
export default function ModelSlider({}: Props) {
  const imageList = il;

  const [id, setId] = useState(5);
  const [relPos, setRelPos] = useState<string[]>([]);
  const [debounce, setDebounce] = useState(false);
  useEffect(() => {
    const l = imageList.length;
    const pos = new Array(l).fill("off");

    const centerIndex = (id + l) % l;
    for (let j = 0; j < co.length; j++) {
      const index = (centerIndex - 2 + (j % l)) % l;
      console.log(index);
      pos[(index + l) % l] = co[j];
    }

    setRelPos(pos);
    console.log(pos);
  }, [id]);

  const next = () => {
    if (debounce) return;
    setId(id + 1);
    unbounce();
  };
  const prev = () => {
    if (debounce) return;
    setId(id - 1);
    unbounce();
  };

  const unbounce = () => {
    setDebounce(true);
    setTimeout(() => setDebounce(false), 1000);
  };
  return (
    <section id="model_slider">
      <div className="controls">
        <button className="btn ctr prev" onClick={next}>
          <BiChevronLeft />{" "}
        </button>
        <button className="btn ctr next" onClick={prev}>
          <BiChevronRight />
        </button>
      </div>
      <div className="slider">
        {imageList.map((img, i) => (
          <img
            src={img}
            alt=""
            className={` ${relPos[i]}`}
            key={"rotaryimg" + i}
          />
        ))}
        {/* <img src="/g/render_1.png" alt="" className="center" />
        <img src="/g/render_1.png" alt="" className="lc" />
        <img src="/g/render_1.png" alt="" className="rc" />
        <img src="/g/render_1.png" alt="" className="lb" />
        <img src="/g/render_1.png" alt="" className="rb" />
        <img src="/g/render_1.png" alt="" className="off" /> */}
      </div>
    </section>
  );
}
