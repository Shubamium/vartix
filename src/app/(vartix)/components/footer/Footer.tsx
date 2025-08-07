import React from "react";

type Props = {};
import "./footer.scss";
import { GoTriangleRight } from "react-icons/go";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <div className="d-edge">
        <div className="big"></div>
        <div className="small"></div>
      </div>
      <div className="d-edge r">
        <div className="small"></div>
        <div className="big"></div>
      </div>
      <div className="fc">
        <div className="l">
          <div className="logo">
            <img src="/g/logo_m.png" alt="" />
          </div>
          <h2>VARTIX</h2>
          <p>
            We are Vartix, a 3D modeling studio that specializes in creating 3D
            models for VTubers. Our primary focus is in creating 3D models that
            look 2D, ensuring they are as close to their 2D references as
            possible.{" "}
          </p>
          <p>
            However, we are also capable of working with any type of 3D
            models.{" "}
          </p>

          <p className="attrib"> ©2025 VARTIX 3D - All rights reserved. </p>
        </div>
        <div className="r">
          <div className="fnav">
            <h2>
              NAVIGATE <GoTriangleRight /> <GoTriangleRight />
            </h2>

            <div className="fnav-l">
              <Link href="/" className="btn btn-fnav">
                Home
              </Link>
              <Link href="/commissions/process" className="btn btn-fnav">
                Process
              </Link>
              <Link href="/commissions/mission-values" className="btn btn-fnav">
                MISSION & VALUES
              </Link>
              <Link href="/portfolio" className="btn btn-fnav">
                PORTFOLIO
              </Link>
              <Link href="/career" className="btn btn-fnav">
                CAREER
              </Link>
              <Link href="/faq" className="btn btn-fnav">
                FAQ
              </Link>
            </div>
          </div>

          <div className="fsocials">
            <h2>GET IN TOUCH</h2>
            <p>
              We’d love to hear from you! Whether you’re ready to start a
              project, want a quote, or just have a few questions — feel free to
              reach out.
            </p>
            <div className="fs-list">
              <a href="mailto:vartix.3d@gmail.com" className="btn btn-fs">
                <CgMail /> vartix.3d@gmail.com
              </a>
              <a href="mailto:vartix.3d@gmail.com" className="btn btn-fs">
                <FaBluesky /> @vlightning.bsky.social
              </a>
              <a href="mailto:vartix.3d@gmail.com" className="btn btn-fs">
                <FaXTwitter /> @_vlightning
              </a>
              <a className="btn btn-fs">
                <BsDiscord /> v_lightning
              </a>
              <a href="https://vgen.co/VLightning" className="btn btn-fs">
                <img src="/g/vgen.png" alt="" />
                vgen.co/VLightning
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
