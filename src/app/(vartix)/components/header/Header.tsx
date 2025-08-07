"use client";
import "./header.scss";

import React, { useState } from "react";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";
import { FaCircleXmark, FaXTwitter } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { s } from "motion/react-client";
type Props = {};

export default function Header({}: Props) {
  const [fs, setFs] = useState(false);
  return (
    <>
      <header id="header">
        <div className="l">
          <Link href="/" className="btn btn-home">
            <img src="/g/logo_m.png" alt="" />
          </Link>
        </div>
        <div className="r">
          <div className="nav">
            <div className="top">
              <h1>VARTIX</h1>
              <button className="btn btn-m" onClick={() => setFs(true)}>
                M
              </button>
            </div>
            <div className="list">
              <Link href={"/"} className="btn btn-nav">
                HOME
              </Link>
              <div className="btn-drop">
                <button className="btn inter">
                  <GoTriangleDown /> <p>COMMISSIONS</p>
                </button>
                <div className="drop">
                  <Link href={"/commissions/process"} className="btn btn-nav">
                    PROCESS
                  </Link>
                  <Link
                    href={"/commissions/mission-values"}
                    className="btn btn-nav bit"
                  >
                    MISSION & VALUES{" "}
                  </Link>
                </div>
              </div>
              <Link href={"/portfolio"} className="btn btn-nav">
                PORTFOLIO
              </Link>
              <Link href={"/contact"} className="btn btn-nav">
                CONTACT US
              </Link>
              <Link href={"/career"} className="btn btn-nav">
                CAREER
              </Link>
              <Link href={"/faq"} className="btn btn-nav">
                FAQ
              </Link>

              <div className="socials">
                <a href="#" className="btn btn-social">
                  <FaXTwitter />
                </a>
                <a href="#" className="btn btn-social">
                  <FaXTwitter />
                </a>
                <a href="#" className="btn btn-social">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="fs"
        className={fs ? "vis" : "clo"}
        onClick={() => {
          setFs(false);
        }}
      >
        <div className="line"></div>
        <h2 className="side-title">VARTIX</h2>
        <nav>
          <div className="topbt">
            <Link href="/" className="btn btn-nav hstroke">
              HOME
              <svg
                width="426"
                height="80"
                viewBox="0 0 426 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.3455 3.21472C51.0427 15.8074 18.7398 28.4 7.30025 34.8871C-4.13931 41.3742 6.26331 41.3742 38.1763 37.8154C70.0892 34.2567 123.197 27.1391 156.305 22.1037C201.067 15.2956 214.399 12.0578 215.518 14.2561C216.304 15.799 212.258 18.6444 198.255 27.1723C159.549 50.7448 130.929 66.2443 131.717 68.4592C135.468 79.0024 163.414 63.5399 200.006 53.6185C224.293 47.0332 261.235 41.507 284.239 38.1224C307.242 34.7378 315.455 34.7378 319.412 35.8328C323.369 36.9278 322.821 39.1178 321.444 41.341C314.715 52.2051 305.699 64.5354 299.046 75.6265C299.561 79.5006 324.779 74.0753 369.218 61.9223C389.567 56.8869 405.445 54.1494 423.463 51.3289"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

            <div className="big-logo">
              <img src="/g/logo_m.png" alt="" className="big_logo" />
            </div>
            <div className=" btn-nav drop hstroke">
              <div className="r">
                <p>COMMISSIONS</p>
                <svg
                  width="426"
                  height="80"
                  viewBox="0 0 426 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.3455 3.21472C51.0427 15.8074 18.7398 28.4 7.30025 34.8871C-4.13931 41.3742 6.26331 41.3742 38.1763 37.8154C70.0892 34.2567 123.197 27.1391 156.305 22.1037C201.067 15.2956 214.399 12.0578 215.518 14.2561C216.304 15.799 212.258 18.6444 198.255 27.1723C159.549 50.7448 130.929 66.2443 131.717 68.4592C135.468 79.0024 163.414 63.5399 200.006 53.6185C224.293 47.0332 261.235 41.507 284.239 38.1224C307.242 34.7378 315.455 34.7378 319.412 35.8328C323.369 36.9278 322.821 39.1178 321.444 41.341C314.715 52.2051 305.699 64.5354 299.046 75.6265C299.561 79.5006 324.779 74.0753 369.218 61.9223C389.567 56.8869 405.445 54.1494 423.463 51.3289"
                    stroke="#FC69B0"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="l">
                <Link href="/commissions/process" className="btn btn-mini">
                  PROCESS
                </Link>
                <Link
                  href="/commissions/mission-values"
                  className="btn btn-mini"
                >
                  MISSION & VALUES
                </Link>
              </div>
            </div>
            <Link href="/portfolio" className="btn btn-nav  hstroke">
              PORTFOLIO
              <svg
                width="426"
                height="80"
                viewBox="0 0 426 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.3455 3.21472C51.0427 15.8074 18.7398 28.4 7.30025 34.8871C-4.13931 41.3742 6.26331 41.3742 38.1763 37.8154C70.0892 34.2567 123.197 27.1391 156.305 22.1037C201.067 15.2956 214.399 12.0578 215.518 14.2561C216.304 15.799 212.258 18.6444 198.255 27.1723C159.549 50.7448 130.929 66.2443 131.717 68.4592C135.468 79.0024 163.414 63.5399 200.006 53.6185C224.293 47.0332 261.235 41.507 284.239 38.1224C307.242 34.7378 315.455 34.7378 319.412 35.8328C323.369 36.9278 322.821 39.1178 321.444 41.341C314.715 52.2051 305.699 64.5354 299.046 75.6265C299.561 79.5006 324.779 74.0753 369.218 61.9223C389.567 56.8869 405.445 54.1494 423.463 51.3289"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-nav  hstroke">
              CONTACT US
              <svg
                width="426"
                height="80"
                viewBox="0 0 426 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.3455 3.21472C51.0427 15.8074 18.7398 28.4 7.30025 34.8871C-4.13931 41.3742 6.26331 41.3742 38.1763 37.8154C70.0892 34.2567 123.197 27.1391 156.305 22.1037C201.067 15.2956 214.399 12.0578 215.518 14.2561C216.304 15.799 212.258 18.6444 198.255 27.1723C159.549 50.7448 130.929 66.2443 131.717 68.4592C135.468 79.0024 163.414 63.5399 200.006 53.6185C224.293 47.0332 261.235 41.507 284.239 38.1224C307.242 34.7378 315.455 34.7378 319.412 35.8328C323.369 36.9278 322.821 39.1178 321.444 41.341C314.715 52.2051 305.699 64.5354 299.046 75.6265C299.561 79.5006 324.779 74.0753 369.218 61.9223C389.567 56.8869 405.445 54.1494 423.463 51.3289"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link href="/career" className="btn btn-nav  hstroke">
              CAREER
              <svg
                width="426"
                height="80"
                viewBox="0 0 426 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.3455 3.21472C51.0427 15.8074 18.7398 28.4 7.30025 34.8871C-4.13931 41.3742 6.26331 41.3742 38.1763 37.8154C70.0892 34.2567 123.197 27.1391 156.305 22.1037C201.067 15.2956 214.399 12.0578 215.518 14.2561C216.304 15.799 212.258 18.6444 198.255 27.1723C159.549 50.7448 130.929 66.2443 131.717 68.4592C135.468 79.0024 163.414 63.5399 200.006 53.6185C224.293 47.0332 261.235 41.507 284.239 38.1224C307.242 34.7378 315.455 34.7378 319.412 35.8328C323.369 36.9278 322.821 39.1178 321.444 41.341C314.715 52.2051 305.699 64.5354 299.046 75.6265C299.561 79.5006 324.779 74.0753 369.218 61.9223C389.567 56.8869 405.445 54.1494 423.463 51.3289"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link href="/faq" className="btn btn-nav  hstroke">
              FAQ
              <svg
                width="426"
                height="80"
                viewBox="0 0 426 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.3455 3.21472C51.0427 15.8074 18.7398 28.4 7.30025 34.8871C-4.13931 41.3742 6.26331 41.3742 38.1763 37.8154C70.0892 34.2567 123.197 27.1391 156.305 22.1037C201.067 15.2956 214.399 12.0578 215.518 14.2561C216.304 15.799 212.258 18.6444 198.255 27.1723C159.549 50.7448 130.929 66.2443 131.717 68.4592C135.468 79.0024 163.414 63.5399 200.006 53.6185C224.293 47.0332 261.235 41.507 284.239 38.1224C307.242 34.7378 315.455 34.7378 319.412 35.8328C323.369 36.9278 322.821 39.1178 321.444 41.341C314.715 52.2051 305.699 64.5354 299.046 75.6265C299.561 79.5006 324.779 74.0753 369.218 61.9223C389.567 56.8869 405.445 54.1494 423.463 51.3289"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
          <div className="bottombt">
            <button className="btn btn-nav ">
              CLOSE <FaCircleXmark />
            </button>
            <a href="/" className="btn btn-nav ">
              START YOUR PROJECT <CgArrowTopRight />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
