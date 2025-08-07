import { GoTriangleDown } from "react-icons/go";
import SliderText from "./components/sliderText/SliderText";
import "./home.scss";
import { FaArrowRight, FaList, FaListCheck } from "react-icons/fa6";
import Link from "next/link";
import InfiniteText from "./components/InfiniteText";
import { FaCog, FaCogs, FaPaintBrush } from "react-icons/fa";
import { PiHandshakeBold } from "react-icons/pi";
import { BsChatDotsFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import Principle from "./home/Principle";
import { ImInfinite } from "react-icons/im";

export default function Home() {
  return (
    <main id="p_home" className={"p_home"}>
      <section id="hero">
        <img src="/g/banner.png" alt="" className="hbg" />
        <h3 className="big-text">{`>VARTIX`}</h3>
        {/* <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
          className="hbg"
        ></video> */}
        <div className="top">
          <h2 className="htt">
            <span>STEP INTO THE</span>{" "}
            <span className="highlight">VIRTUAL WORLD</span>
          </h2>
          <h2 className="hbt">
            WITH A <span> 3D MODEL</span>
            <img src="/d/boxicon.svg" alt="" className="icon" />
          </h2>
        </div>

        <div className="bottom">
          <p>AS UNIQUE AS</p>
          <h2 className="hstroke">
            YOU
            <svg
              width="293"
              height="38"
              viewBox="0 0 293 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 25.0858C18.8929 22.6725 35.7858 20.2593 67.173 16.3615C98.5602 12.4637 143.93 7.15445 170.681 4.4194C197.431 1.68436 204.189 1.68436 207.67 2.40834C211.15 3.13232 211.15 4.58029 210.668 7.0155C207.698 21.9981 196.539 31.9015 194.104 34.0881C192.936 35.1372 192.634 36.7573 197.212 35.0899C225.594 24.7526 247.54 12.9463 260.615 9.96994C263.46 9.32238 263.804 17.729 264.769 24.552C265.142 27.1861 267.665 27.5137 270.108 27.7624C275.424 28.3036 279.878 27.0457 282.313 26.5484C283.3 27.0164 283.783 28.9471 284.755 30.1829C285.728 31.4188 287.176 31.9015 290.13 30.9362"
                stroke="#B3F50D"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>
      </section>

      <section id="us">
        <h3 className="stroke">//VARTIX'S TAGLINE_</h3>
        <div className="panel">
          <div className="l">
            <img src="/g/fox.png" alt="" />
            <div className="controls">
              <button className="btn btn-l"> </button>
              <button className="btn btn-l"> </button>
              <button className="btn btn-l"> </button>
            </div>
          </div>
          <article className="r">
            <img src="/g/logo_m.png" alt="" />
            <h2>
              WHY CHOOSE <br />
              <span>US</span>
            </h2>

            <p>
              We’ve been creating 3D VTuber models for years and love helping
              people bring their ideas to life. Your model will be created by a
              team of skilled professionals who are passionate about bringing
              your vision to . Our experience means we know how to make models
              that don’t just look great but also work perfectly for you. We’re
              always learning and keeping up with the latest technology to make
              sure your model is the best it can be!
            </p>
            <p>
              Your happiness means everything to us. We’ll keep you involved
              every step of the way, making sure every detail is just right, so
              your model feels truly yours. When you’re happy, we’re happy too!
            </p>
            <p>
              <strong>When you’re happy, we’re happy too!</strong>
            </p>
          </article>
        </div>
      </section>

      <SliderText />
      <section id="workflow">
        <img src="/d/box-shadow.png" alt="" className="box" />
        <InfiniteText t="VARTIX" className="stroke" />
        <div className="wh">
          <div className="l">
            <div className="box"></div>
            <svg
              width="110"
              height="174"
              viewBox="0 0 110 174"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.7585 86.238L109.517 118.926L54.7585 147.029L7.84928e-07 118.926L54.7585 86.238Z"
                fill="#6B6B6B"
              />
              <path
                d="M54.7585 54.6418L109.517 87.3298L54.7585 115.432L7.84928e-07 87.3298L54.7585 54.6418Z"
                fill="#A4A4A4"
              />
              <path
                d="M54.7585 22.0705L109.517 54.7585L54.7585 82.8611L7.84928e-07 54.7585L54.7585 22.0705Z"
                fill="#C6C6C6"
              />
            </svg>

            <h2>
              FULL <span className="g">WORK</span>
              <span className="p">FLOW</span>
            </h2>
          </div>
          <div className="r">
            <div className="big"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className="wc">
          <div className="l">
            <img src="/g/guitar.png" alt="" />
          </div>
          <div className="r">
            <div className="drd open">
              <div className="top">
                <h2>🧊 3D Modeling</h2>
                <button className="btn btn-drop">
                  <GoTriangleDown />
                </button>
              </div>
              <div className="content">
                <p>
                  Finally, we prepare your model in Unity. We set up the
                  appropriate shaders, create toggles and animations, and export
                  the model in your chosen formats — whether that’s VRM,
                  VSFAvatar, Warudo, or VRChat.
                </p>
                <p>
                  Everything is packaged and tested so your model is ready to
                  use right away!
                </p>
              </div>
            </div>
            <div className="drd">
              <div className="top">
                <h2>🧊 3D Modeling</h2>
                <button className="btn btn-drop">
                  <GoTriangleDown />
                </button>
              </div>
              <div className="content">
                <p>
                  Finally, we prepare your model in Unity. We set up the
                  appropriate shaders, create toggles and animations, and export
                  the model in your chosen formats — whether that’s VRM,
                  VSFAvatar, Warudo, or VRChat.
                </p>
                <p>
                  Everything is packaged and tested so your model is ready to
                  use right away!
                </p>
              </div>
            </div>
            <div className="drd">
              <div className="top">
                <h2>🧊 3D Modeling</h2>
                <button className="btn btn-drop">
                  <GoTriangleDown />
                </button>
              </div>
              <div className="content">
                <p>
                  Finally, we prepare your model in Unity. We set up the
                  appropriate shaders, create toggles and animations, and export
                  the model in your chosen formats — whether that’s VRM,
                  VSFAvatar, Warudo, or VRChat.
                </p>
                <p>
                  Everything is packaged and tested so your model is ready to
                  use right away!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SliderText r={true} />

      <section id="works">
        <InfiniteText t="VARTIX" className="tt" />
        <div className="l">
          <video
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            autoPlay
            muted
            controls
          ></video>
          <Link href="/portfolio" className="btn btn-sample">
            VIEW MORE SAMPLE <FaArrowRight />
          </Link>
        </div>
        <div className="c">
          <video
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            autoPlay
            muted
            controls
          ></video>
        </div>
        <div className="r">
          <h2>
            OUR{" "}
            <span className="hstroke">
              WORKS{" "}
              <svg
                width="243"
                height="26"
                viewBox="0 0 243 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.62939 11.6996C77.0248 8.56687 152.42 5.4341 192.096 3.82025C231.771 2.20639 233.442 2.20639 233.885 2.6241C234.84 3.5249 229.29 5.15563 223.17 7.15238C208.916 11.8029 202.481 13.1679 198.26 14.9622C197.335 15.3551 196.988 16.1172 197.19 16.4399C199.31 19.8183 207.506 15.4969 221.186 13.9211C225.213 13.4571 227.347 13.3894 229.243 13.073C230.089 12.9317 230.721 12.9654 229.581 13.6964C222.312 18.3608 218.519 18.4462 215.667 19.1835C206.277 21.6119 243.188 18.0222 241.087 19.1803C238.151 20.1297 235.594 20.9777 233.91 21.8195C233.062 22.2435 232.227 22.6612 230.733 23.7244"
                  stroke="#FC69B0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <video
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            autoPlay
            muted
            controls
          ></video>
        </div>
        <InfiniteText t="VARTIX" r={true} className="bt" />
      </section>

      <section id="achieve">
        <div className="point">
          <h2 className="num">40+</h2>
          <p>TITLE HERE</p>
        </div>
        <div className="point">
          <h2 className="num">40+</h2>
          <p>TITLE HERE</p>
        </div>
        <div className="point">
          <h2 className="num">40+</h2>
          <p>TITLE HERE</p>
        </div>
      </section>

      <div id="values">
        <div className="confine">
          <div className="l">
            <h2 className="toptext">OUR CORE</h2>
            <h2 className="hstroke">
              VALUES
              <svg
                width="318"
                height="47"
                viewBox="0 0 318 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.64062 36.6391C102.855 24.5739 204.069 12.5086 256.098 6.62834C308.127 0.748055 307.903 1.41835 307.229 2.32223C304.078 6.55037 298.004 8.18897 289.985 11.8011C288.305 12.5578 287.158 12.7118 279.098 15.7315C271.037 18.7512 256.067 24.5603 247.909 27.8881C239.75 31.2159 238.856 31.8862 238.172 32.5666C237.489 33.2471 237.042 33.9174 239.269 34.1509C241.497 34.3845 246.412 34.1611 254.865 32.8171C263.319 31.4732 275.16 29.0154 282.713 27.6376C293.12 25.739 298.174 25.3593 300.885 25.2408C301.659 25.207 300.916 26.6863 300.124 27.4853C296.14 31.5033 285.614 36.1652 278.244 40.6846C274.547 42.9518 271.795 44.3103 271.338 44.8722C270.364 46.0708 285.438 44.1071 303.712 41.0604C310.368 40.0245 311.708 40.0245 312.957 39.9127C314.207 39.801 315.324 39.5776 316.475 39.3474"
                  stroke="#B3F50D"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <Link href="/commission/mission-values" className="btn btn-values">
              {" "}
              LEARN MORE
            </Link>
            <img src="/g/maid.png" alt="" />
          </div>
          <div className="r">
            <div className="elevator">
              <div className="lift">
                <h2>CLEAN TOPOLOGY, ALWAYS</h2>
              </div>
              <div className="lift">
                <h2>We Build Around Your Vision</h2>
              </div>
              <div className="lift">
                <h2>Quick Communication</h2>
              </div>
              <div className="lift">
                <h2>Delivered in Formats that you need</h2>
              </div>{" "}
              <div className="lift">
                <h2>Wide Art Style Range</h2>
              </div>
              <div className="lift">
                <h2>We Build Around Your Vision</h2>
              </div>
              <div className="lift">
                <h2> Ready to Import & Usee</h2>
              </div>
              {/* 2 */}
              <div className="lift">
                <h2>CLEAN TOPOLOGY, ALWAYS</h2>
              </div>
              <div className="lift">
                <h2>We Build Around Your Vision</h2>
              </div>
              <div className="lift">
                <h2>Quick Communication</h2>
              </div>
              <div className="lift">
                <h2>Delivered in Formats that you need</h2>
              </div>{" "}
              <div className="lift">
                <h2>Wide Art Style Range</h2>
              </div>
              <div className="lift">
                <h2>We Build Around Your Vision</h2>
              </div>
              <div className="lift">
                <h2> Ready to Import & Usee</h2>
              </div>
              {/* 3 */}
              <div className="lift">
                <h2>CLEAN TOPOLOGY, ALWAYS</h2>
              </div>
              <div className="lift">
                <h2>We Build Around Your Vision</h2>
              </div>
              <div className="lift">
                <h2>Quick Communication</h2>
              </div>
              <div className="lift">
                <h2>Delivered in Formats that you need</h2>
              </div>{" "}
              <div className="lift">
                <h2>Wide Art Style Range</h2>
              </div>
              <div className="lift">
                <h2>We Build Around Your Vision</h2>
              </div>
              <div className="lift">
                <h2> Ready to Import & Usee</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Principle />
    </main>
  );
}
