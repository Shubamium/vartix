"use client";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {
  question: string;
  answer: SerializedEditorState;
};

export default function Dropdown({ question, answer }: Props) {
  const [act, setAct] = useState(false);

  return (
    <div
      className={`drop ${act ? "act" : "clo"}`}
      // onClick={() => setAct(false)}
    >
      <div className="top">
        <h2>{question}</h2>
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
        <RichText data={answer}></RichText>
      </div>
    </div>
  );
}
