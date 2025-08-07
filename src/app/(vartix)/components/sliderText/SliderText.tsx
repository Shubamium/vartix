import React from "react";

type Props = {
  r?: boolean;
};

export default function SliderText({ r }: Props) {
  return <div className={`slider-text ${r && "r"}`}></div>;
}
