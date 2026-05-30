import React from "react";

import Marquee from "react-fast-marquee";
type Props = {
  r?: boolean;
};

export default function SliderText({ r }: Props) {
  // return <div className={`slider-text ${r && "r"}`}></div>;
  return (
    <Marquee className="slider-text-marquee">
      <div className="point">
        <div className="box"></div>
        <p>Premium 3D Character Art</p>
      </div>
      <div className="point">
        <div className="box"></div>
        <p>Start-to-Finish Workflow</p>
      </div>
      <div className="point">
        <div className="box"></div>
        <p>Warudo • VRChat • VRM • VSFAvatar</p>
      </div>
      <div className="point">
        <div className="box"></div>
        <p>Fully Custom 3D Models</p>
      </div>
    </Marquee>
  );
}
