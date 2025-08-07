import React from "react";

type Props = {};
import "./faq.scss";
import InfiniteText from "../components/InfiniteText";
import { GoTriangleDown } from "react-icons/go";
import Dropdown from "./Dropdown";
export default function faq({}: Props) {
  return (
    <main id="p_faq">
      <div id="fh">
        <div className="confine">
          <h2>FREQUENTLY ASKED</h2>
          <h2 className="hstroke">
            QUESTIONS
            <svg
              width="559"
              height="36"
              viewBox="0 0 559 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 32.7452C22.5867 30.0568 42.1734 27.3684 125.234 23.1031C208.294 18.8378 354.234 13.077 429.608 9.53325C504.981 5.98948 505.365 4.83732 504.603 4.24379C497.552 -1.24578 464.865 12.9141 453.372 17.9941C446.012 21.2477 471.196 16.8477 491.225 15.2999C507.384 14.0511 535.833 13.752 547.977 14.1244C560.122 14.4968 555.129 16.0331 550.061 17.2085C540.079 19.5235 531.015 21.0956 516.555 23.4174C506.006 25.1111 488.653 25.7391 481.286 26.7167C473.919 27.6943 476.992 28.4624 481.839 28.8581C493.215 29.2538 504.55 28.4857 517.102 27.1299C525.045 26.5422 536.182 26.1581 547.657 25.7624"
                stroke="#FC69B0"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>
      </div>

      <div id="fl">
        <InfiniteText t="VARTIX" r />

        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </main>
  );
}
