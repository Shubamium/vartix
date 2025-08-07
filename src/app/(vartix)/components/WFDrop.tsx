"use client";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = { h: string; d: React.ReactNode };

export default function WFDrop({ h, d }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`drd ${open ? "open" : ""}`}>
      <div className="top">
        <h2>{h}</h2>
        <button
          className="btn btn-drop"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <GoTriangleDown />
        </button>
      </div>
      <div className="content">{d}</div>
    </div>
  );
}
