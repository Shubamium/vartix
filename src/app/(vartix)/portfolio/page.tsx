import React from "react";

type Props = {};
import "./portfolio.scss";
import ModelSlider from "./modelSlider/ModelSlider";
import SliderText from "../components/sliderText/SliderText";
import WorkList from "./workList/WorkList";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { Media } from "@/payload-types";
export default async function page({}: Props) {
  const config = await payloadConfig;
  const payload = await getPayload({
    config,
  });
  const pfw = await payload.findGlobal({
    slug: "portfolio",
  });

  const rart = pfw?.rart
    ?.map((v) => {
      if (typeof v === "string") return null;
      const media = v as Media;
      return media.sizes?.max?.url ?? media.url;
    })
    .filter((v) => v !== null) as string[];

  const pl = pfw.wl;

  return (
    <main id="p_portfolio">
      <section id="ph">
        <div className="phh">
          <h2>PORTFOLIO</h2>
          <p>
            Welcome to our portfolio, where we show you each character that
            we've brought to 3D
          </p>
          <p>
            Every commission we work on is special to us. Each model has its own
            idea, style, and personality, and reflects not just a design, but
            the person behind it We always listen to your ideas to{" "}
            <strong>make your model become real</strong>, exactly the way you
            imagine it
          </p>
          <p className="highlights">
            ⤷ ゛Who knows - maybe your model will be featured here next? ˎˊ˗
          </p>
          <div className="edge"></div>
          <div className="triangle"></div>
        </div>
      </section>
      <ModelSlider il={rart} />
      <SliderText />

      <WorkList wl={pl} />
    </main>
  );
}
