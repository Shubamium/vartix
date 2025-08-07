import React from "react";

type Props = {};
import "./values.scss";
import EffectorHero from "./EffectorHero";
import { GoTriangleRight } from "react-icons/go";
export default function page({}: Props) {
  return (
    <main id="p_values">
      <EffectorHero />
      <section id="mission">
        <img src="/g/logo_m.png" alt="" className="logo" />
        {/* <p></p> */}
        <h2 className="sh">At the heart of our studio is a simple mission:</h2>
        <h2 className="h">
          To bring your characters to life with care, creativity, and
          craftsmanship.
        </h2>
        <p>
          We know how important your model is — whether it's for streaming,
          storytelling, or game development — and we’re here to make sure it
          feels uniquely yours.
        </p>
        <p>
          Every model we create is built from scratch with attention to detail,
          high-quality standards, and a deep respect for your vision.
        </p>
        <img src="/d/bgchal.png" alt="" className="bgchar l" />
        <img src="/d/bgchar.png" alt="" className="bgchar r" />
      </section>
      <section id="principle">
        <div className="ph">
          <div className="l">
            <div className="tri"></div>
            <h2>
              OUR{" "}
              <span className="hstroke">
                PRINCIPLES
                <svg
                  width="542"
                  height="34"
                  viewBox="0 0 542 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.87988 30.8013C148.751 21.546 294.621 12.2908 375.501 7.52294C456.381 2.75509 467.849 2.75509 475.065 2.95629C484.911 3.23083 490.006 3.97449 493.262 4.27629C494.152 4.35879 493.298 5.18169 492.28 5.59324C486.98 7.73561 479.092 9.25449 471.566 10.7757C464.367 12.2306 461.996 13.7175 460.359 14.44C460.161 14.5275 461.557 14.7418 468.615 14.8454C475.672 14.9491 488.75 14.9491 496.493 15.1503C506.264 15.4042 510.132 16.1685 512.373 16.3697C513.204 16.4443 502.109 18.9975 484.775 21.8387C476.121 23.2571 467.642 23.8751 473.349 24.2897C479.056 24.7043 499.176 24.7043 509.138 25.0061C519.101 25.3079 518.296 25.9115 517.479 26.2224C513.84 27.6073 505.529 28.3503 494.941 29.5788C493.085 29.7831 492.481 29.9843 500.017 30.0879C507.553 30.1916 523.247 30.1916 539.416 30.1916"
                    stroke="#FC69B0"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <div className="r">
            <img src="/g/logo_m.png" alt="" />
          </div>
        </div>
        <div className="pl">
          <div className="prin">
            <h2>💗 Client-Centered Approach</h2>
            <p>
              We treat every project like a collaboration. Your feedback shapes
              the final result, and we’re always here to answer questions, offer
              guidance, and support your ideas.
            </p>
            <div className="prin">
              <h2>🎨 Creativity & Customization</h2>
              <p>
                No two models are the same. We embrace variety, support all
                kinds of designs and love bringing original concepts to life.
              </p>
            </div>
            <div className="prin">
              <h2>🎯 Quality & Care</h2>
              <p>
                From clean topology to expressive blendshapes, we put care into
                every detail. We don’t cut corners, and we always aim for models
                that are beautiful, functional, and optimized!
              </p>
            </div>
            <div className="prin">
              <h2>📢 Clear Communication</h2>
              <p>
                We believe the best results come from open and honest
                communication. That’s why we keep you updated throughout the
                entire process, with previews, progress updates, and full
                transparency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
