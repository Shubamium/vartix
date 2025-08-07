import React, { CSSProperties } from "react";

type Props = {};
import "./career.scss";
import { GoTriangleRight } from "react-icons/go";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
export default async function page({}: Props) {
  const config = await payloadConfig;
  const payload = await getPayload({
    config,
  });
  const carr = await payload.findGlobal({
    slug: "career",
  });

  const banner = carr?.banner as Media;

  const ia = carr?.ima as Media;
  const ib = carr?.imb as Media;
  const ic = carr?.imc as Media;

  return (
    <main id="p_career">
      <div
        className="bh"
        style={
          {
            "--bg": `url('${banner.sizes?.max?.url ?? banner.url ?? "/g/placeholder2.png"}')`,
          } as CSSProperties
        }
      >
        <div className="confine">
          <h2 className="sh">CAREERS</h2>
          <h2 className="h">
            JOIN THE{" "}
            <span className="hstroke">
              TEAM{" "}
              <svg
                width="268"
                height="30"
                viewBox="0 0 268 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.50488 26.6919C80.4204 19.8811 158.336 13.0703 199.292 9.42552C240.247 5.78071 241.882 5.50828 242.179 5.0955C246.516 -0.928329 222.118 11.5513 219.497 14.8453C218.823 15.6918 217.99 16.2239 217.161 16.7771C215.514 17.875 231.017 17.8915 254.013 17.3384C260.661 17.1785 257.121 17.875 253.526 18.4282C241.588 20.2648 238.076 22.011 236.829 22.56C236.945 22.8366 238.58 23.109 243.508 23.2494C248.437 23.3897 256.61 23.3897 265.03 23.3897"
                  stroke="#FC69B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>
      </div>
      <article>
        <div className="rowimg">
          <img
            src={ia.sizes?.small?.url ?? ia.url ?? "/g/placeholder2.png"}
            alt=""
          />
          <img
            src={ib.sizes?.small?.url ?? ib.url ?? "/g/placeholder2.png"}
            alt=""
          />
          <img
            src={ic.sizes?.small?.url ?? ic.url ?? "/g/placeholder2.png"}
            alt=""
          />
        </div>
        <div className="rowtext">
          <div className="l">
            <p>
              We’re always on the lookout for passionate, talented artists and
              collaborators who love bringing characters to life just as much as
              we do.{" "}
            </p>
            <p>
              Whether you’re a 3D modeler, rigger, texture artist, animator, or
              technical expert — if you care about quality and love working in a
              creative, friendly environment, we’d love to hear from you!
            </p>
          </div>
          <div className="r">
            <p>
              At our studio, we value clear communication, creative freedom, and
              a strong sense of teamwork. Every project is a collaboration, and
              we believe in supporting each other to grow and create amazing
              work together.
            </p>
            <p>
              If you're interested in working with us, please{" "}
              <strong>feel free to reach out</strong>
              with your portfolio, experience, and a little bit about yourself.
              We can’t wait to see what you can bring to the team!
            </p>
          </div>
        </div>
      </article>

      <div className="working">
        <h2>Interested in working with us?</h2>
        <a href={carr.apply_link} target="_blank" className="btn btn-apply">
          Apply now <GoTriangleRight />
        </a>
      </div>
    </main>
  );
}
