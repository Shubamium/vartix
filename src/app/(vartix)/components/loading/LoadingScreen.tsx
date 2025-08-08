"use client";
import React, { useEffect, useState } from "react";

type Props = {};
import "./loadingScreen.scss";
export default function LoadingScreen({}: Props) {
  const [l, setL] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setL(true);
    }, 3000);
  }, []);
  return (
    <div id="loading-screen" className={`${l ? "loaded" : ""}`}>
      <img src="/g/logo_m.png" alt="" />
      <p>LOADING . . .</p>
      <div className="bar"></div>
    </div>
  );
}
