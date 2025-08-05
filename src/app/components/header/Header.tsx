import "./header.scss";
import React from "react";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

export default function Header({}: Props) {
  return (
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
            <button className="btn btn-m">M</button>
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
                <Link href={"/commission/process"} className="btn btn-nav">
                  PROCESS
                </Link>
                <Link
                  href={"/commission/mission-values"}
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
  );
}
