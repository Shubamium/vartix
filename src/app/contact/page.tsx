import React from "react";
import "./contact.scss";
import InfiniteText from "../components/InfiniteText";
import SliderText from "../components/sliderText/SliderText";
import { CgMail } from "react-icons/cg";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { BsDiscord, BsTriangle } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="p_contact">
      <section id="cont">
        <div className="l">
          <h2 className="sh">GET IN TOUCH</h2>
          <h2 className="h">
            CONTACT{" "}
            <span className="hstroke">
              US
              <svg
                width="190"
                height="25"
                viewBox="0 0 190 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.21094 14.8418C4.24233 14.8418 5.27372 14.8418 18.8693 14.3261C32.4649 13.8104 58.5934 12.779 74.2883 11.9039C89.9831 11.0288 94.4525 10.3412 106.897 9.2994C119.341 8.25759 139.625 6.8824 151.106 5.83018C164.704 4.58392 170.213 3.38193 174.906 3.38193C178.854 3.38193 155.752 7.17411 140.954 11.1799C137.543 12.103 134.541 14.1125 141.714 14.9981C166.25 18.0272 185.517 15.5398 186.22 15.0189C190.672 11.7215 173.067 17.2588 162.644 19.0038C159.503 19.6966 155.69 20.3946 150.835 21.0875C148.731 21.4365 147.355 21.7803 144.897 22.1345"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="desc">
            We’d love to hear from you! Whether you’re ready to start a project,
            want a quote, or just have a few questions — feel free to reach out.{" "}
          </p>
          <p className="desc">
            We’re always happy to chat and help guide you through the process.
          </p>

          <section className="cpart">
            <a href="mailto:vartix.3d@gmail.com" className="btn btn-mail">
              <CgMail /> vartix.3d@gmail.com
            </a>
            <div className="clist">
              <a href="#" className="btn btn-ct">
                <FaXTwitter />
              </a>
              <a href="#" className="btn btn-ct">
                <FaBluesky />
              </a>
              <a href="#" className="btn btn-ct">
                {" "}
                <BsDiscord />
              </a>
              <a href="#" className="btn btn-ct">
                <img src="/g/vgen.png" alt="" />
              </a>
              <a href="#" className="btn btn-ct big">
                <span>Start Your Project</span> <GoTriangleRight />
              </a>
            </div>

            <p className="note">
              You can contact us through email, social media, or our commission
              form. We do our best to respond as quickly as possible and provide
              the support you need every step of the way.
            </p>
          </section>
        </div>
        <div className="r">
          <img src="/g/contactart.png" alt="" />
        </div>
      </section>
      <SliderText />
    </main>
  );
}
