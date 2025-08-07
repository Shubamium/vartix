"use client";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {};

export default function Dropdown({}: Props) {
  const [act, setAct] = useState(false);

  return (
    <div
      className={`drop ${act ? "act" : "clo"}`}
      // onClick={() => setAct(false)}
    >
      <div className="top">
        <h2>Do you work with furry/anthro/techy/mech/armor designs?</h2>
        <button
          className="btn btn-drop"
          onClick={(e) => {
            e.stopPropagation();
            setAct(!act);
          }}
        >
          <GoTriangleDown />
        </button>
      </div>
      <div className="content">
        <p>
          Yes, absolutely! We're always open to working on such unique models!
        </p>
      </div>
    </div>
  );
}
