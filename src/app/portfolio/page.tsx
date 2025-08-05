import React from "react";

type Props = {};
import "./portfolio.scss";
import ModelSlider from "./modelSlider/ModelSlider";
import SliderText from "../components/sliderText/SliderText";
export default function page({}: Props) {
  return (
    <main id="p_portfolio">
      <section id="ph">
        <div className="phh">
          <h2>PORTFOLIO</h2>
          <p>
            Welcome to our portfolio — a showcase of characters we've brought to
            life through 3D modeling. Each creation is made from scratch with
            care, creativity, and precision.
          </p>
          <p>
            We take pride in adapting to{" "}
            <strong>different styles and needs</strong>, and delivering models
            that are not only visually appealing but also optimized, expressive,
            and ready to use!
          </p>
          <div className="edge"></div>
          <div className="triangle"></div>
        </div>
      </section>
      <ModelSlider />
      <SliderText />
    </main>
  );
}
