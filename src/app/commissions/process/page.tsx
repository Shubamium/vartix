import React from "react";

type Props = {};
import "./process.scss";
import { FaXTwitter } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { GrCheckmark } from "react-icons/gr";
import InfiniteText from "@/app/components/InfiniteText";
import SliderText from "@/app/components/sliderText/SliderText";
export default function page({}: Props) {
  return (
    <main id="p_process">
      <div className="wire"></div>
      <section id="step">
        <div className="sh">
          <h2 className="ht">OUR \\</h2>
          <h2 className="hm">COMMISSIONS</h2>
          <h2 className="hb hstroke">
            PROCESS{" "}
            <svg
              width="669"
              height="145"
              viewBox="0 0 669 145"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 63.2681C70.5071 24.3139 106.669 3.77159 110.023 4.00192C111.635 4.11263 112.427 6.6075 112.441 8.29897C112.509 16.2667 100.047 38.623 93.2664 52.4427C88.88 61.3831 88.9333 68.5081 87.7385 78.0954C86.5596 87.5552 87.9688 94.9238 91.0639 97.5581C93.2612 99.4284 98.4343 99.7174 108.482 97.5941C118.53 95.4708 133.732 90.2452 165.553 82.5652C197.374 74.8853 245.355 64.9092 285.511 55.257C325.667 45.6048 356.545 36.5789 372.215 32.8792C387.884 29.1796 387.409 31.0798 385.502 34.1964C380.774 41.9213 373.993 48.3688 360.885 64.0814C350.108 77.0016 333.052 101.646 323.285 114.602C312.539 128.856 309.674 131.388 307.997 134.979C307.218 136.647 306.794 138.096 308.688 139.067C310.581 140.039 314.856 140.514 327.035 139.334C339.213 138.153 359.165 135.303 388.208 129.322C417.251 123.34 454.78 114.314 478.151 108.002C509.904 99.4257 525.994 93.0379 540.131 89.4463C546.229 87.8968 549.992 86.3297 552.425 86.3081C554.857 86.2865 555.807 87.7116 556.297 91.0586C558.523 106.278 554.397 113.134 554.857 136.599C554.946 141.104 557.708 141.004 560.349 140.766C566.316 140.054 572.593 138.614 590.688 134.562C605.932 131.459 633.485 126.234 664.752 119.41"
                stroke="#FC69B0"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>
        <div className="sl">
          <div className="s">
            <p>STEP 1</p>
            <div className="panel">
              <h2>Reach Out To us</h2>
              <p>
                Start by contacting us! We’ll provide you with a Google form to
                help us understand your requirements and create a personalized
                quote for your 3D model.
              </p>
              <div className="socials">
                <a href="#" className="btn btn-sc">
                  <FaXTwitter />
                </a>
                <a href="#" className="btn btn-sc">
                  <FaXTwitter />
                </a>
                <a href="#" className="btn btn-sc">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="ca">
            <svg
              width="23"
              height="88"
              viewBox="0 0 23 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1.5L19.5 41L3 87" stroke="#B3F50D" strokeWidth="5" />
            </svg>
          </div>
          <div className="s">
            <p>STEP 2</p>
            <div className="panel">
              <h2>Start the Creation Process</h2>
              <p>
                Once the prepayment is made, we’ll begin bringing your model to
                life! The process is typically divided into three major stages:
              </p>
              <div className="stages">
                <div className="stage">
                  <h3>1.Modeling of the 3D mesh </h3>
                </div>
                <div className="stage">
                  <h3>2.Texturing </h3>
                </div>
                <div className="stage">
                  <h3>
                    3.Rigging, adding facial blendshapes, and conversion to
                    different formats{" "}
                  </h3>
                  <h3 className="smol">(VRM, VSFAvatar, VRChat)</h3>
                </div>
              </div>
              <p>
                After each of these stages is complete, we’ll send you renders
                from all sides of the model for you to approve before moving on
                to the next stage!
              </p>
            </div>
          </div>
          <div className="ca">
            <svg
              width="23"
              height="88"
              viewBox="0 0 23 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1.5L19.5 41L3 87" stroke="#B3F50D" strokeWidth="5" />
            </svg>
          </div>
          <div className="s">
            <p>FINAL STEP</p>
            <div className="panel">
              <h2>Receive Your Final Model</h2>
              <p>
                Once the rigging is complete and the model is fully paid, we’ll
                deliver the final files to you, ready for use!
              </p>
              <button className="btn btn-std">
                Start Your Project <GoTriangleRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="priority">
        <div className="l">
          <img src="/g/placeholder2.png" alt="" />
        </div>
        <div className="r">
          <div className="panel">
            <h2>
              <span className="smol">YOUR VISION</span>,
              <span className="hstroke">
                OUR PRIORITY{" "}
                <svg
                  width="315"
                  height="13"
                  viewBox="0 0 315 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.10205 10.926C47.5822 9.01773 94.0624 7.10945 136.681 5.30857C179.299 3.50769 216.646 1.87202 235.409 1.30202C254.172 0.732012 253.218 1.27723 251.84 2.23963C250.463 3.20203 248.691 4.56509 247.778 5.47172C246.865 6.37836 246.865 6.78728 248.023 6.99793C249.182 7.20859 251.499 7.20859 257.396 6.59521C263.292 5.98184 272.697 4.75509 277.814 4.05497C285.26 3.03636 288.302 2.94181 289.264 2.93975C289.702 2.93881 289.954 3.4829 289.822 3.96617C289.04 6.82614 282.833 8.84425 280.596 10.7835C279.622 11.6281 286.753 11.2027 293.219 10.8599C299.714 9.8273 307.137 9.27382 310.464 8.93099C311.288 8.86077 312.515 8.86077 313.778 8.86077"
                    stroke="#B3F50D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p>
              We’re a friendly and easy-to-work-with team! We’re always happy to
              answer any questions you have! Throughout the whole process, we
              provide regular updates so you always know what stage your model
              is at.
            </p>
            <p>
              Our workflow is clear and transparent — we want you to feel
              confident and involved every step of the way! Your ideas matter to
              us, and we do our best to make the process smooth, stress-free,
              and enjoyable!
            </p>
          </div>
        </div>
      </section>

      <section id="cards">
        <InfiniteText className="tbg" t="VARTIX VARTIX" />
        <div className="circle"></div>
        <div className="container">
          <div className="card one">
            <div className="icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.2802 22.3466C48.598 21.2253 47.6322 20.3037 46.4802 19.6746L35.6269 13.6079C34.5137 13.0034 33.267 12.6868 32.0002 12.6868C30.7335 12.6868 29.4868 13.0034 28.3736 13.6079L17.5202 19.6746C16.3679 20.3044 15.4021 21.227 14.7202 22.3492C14.0536 23.5012 13.7042 24.8132 13.7069 26.1439V37.8532C13.7042 39.1866 14.0536 40.4959 14.7202 41.6506C15.3949 42.7786 16.3629 43.7039 17.5202 44.3226L28.3736 50.3652C29.4845 50.9768 30.7321 51.2975 32.0002 51.2975C33.2684 51.2975 34.516 50.9768 35.6269 50.3652L46.4802 44.3226C47.6376 43.7012 48.6056 42.7759 49.2802 41.6506C49.9442 40.5039 50.2936 39.2052 50.2936 37.8799V26.2532C50.3162 24.8841 49.966 23.5319 49.2802 22.3466ZM46.2936 37.8826C46.2936 38.4932 46.1389 39.0906 45.8402 39.6212C45.5229 40.1546 45.0722 40.5999 44.5336 40.9039L34.0002 46.7599V33.1466L46.2669 25.7412C46.2794 25.8746 46.2794 26.0079 46.2669 26.1412L46.2936 37.8826ZM56.6669 23.0159C56.404 23.0159 56.1438 22.9641 55.9009 22.8634C55.6581 22.7627 55.4375 22.6152 55.2518 22.4292C55.066 22.2432 54.9187 22.0224 54.8184 21.7794C54.718 21.5365 54.6666 21.2761 54.6669 21.0132V15.6666C54.6718 14.8475 54.5141 14.0357 54.2028 13.2781C53.8915 12.5205 53.4329 11.8322 52.8536 11.2532C51.6872 10.083 50.1058 9.42072 48.4536 9.41057H40.2136C39.9505 9.41057 39.69 9.35866 39.447 9.25782C39.204 9.15698 38.9833 9.00918 38.7975 8.8229C38.6117 8.63662 38.4645 8.41551 38.3643 8.17224C38.2641 7.92897 38.2129 7.66833 38.2136 7.40524C38.2143 6.87453 38.425 6.36568 38.7998 5.98991C39.1746 5.61414 39.6829 5.40202 40.2136 5.3999H48.4536C51.1671 5.41241 53.7653 6.49867 55.6802 8.42124C56.6342 9.37015 57.3895 10.4995 57.9023 11.7435C58.4151 12.9875 58.675 14.3211 58.6669 15.6666V21.0132C58.6655 21.5435 58.4544 22.0517 58.0797 22.4268C57.705 22.802 57.1972 23.0138 56.6669 23.0159ZM48.4536 58.7332H40.2136C39.9505 58.7332 39.69 58.6813 39.447 58.5805C39.204 58.4796 38.9833 58.3318 38.7975 58.1456C38.6117 57.9593 38.4645 57.7382 38.3643 57.4949C38.2641 57.2516 38.2129 56.991 38.2136 56.7279C38.2143 56.1972 38.425 55.6883 38.7998 55.3126C39.1746 54.9368 39.6829 54.7247 40.2136 54.7226H48.4536C49.6848 54.727 50.8894 54.364 51.9131 53.6799C52.9369 52.9958 53.7332 52.0218 54.2002 50.8826C54.5122 50.1252 54.6696 49.3119 54.6669 48.4932V42.9866C54.6676 42.4559 54.8784 41.947 55.2531 41.5712C55.6279 41.1955 56.1362 40.9834 56.6669 40.9812C56.93 40.9812 57.1905 41.0331 57.4335 41.134C57.6765 41.2348 57.8972 41.3826 58.083 41.5689C58.2688 41.7552 58.416 41.9763 58.5162 42.2196C58.6164 42.4628 58.6676 42.7235 58.6669 42.9866V48.4932C58.6699 49.8381 58.4078 51.1704 57.8959 52.414C57.3839 53.6577 56.6319 54.7883 55.6829 55.7412C54.7346 56.6918 53.6076 57.4455 52.367 57.959C51.1263 58.4725 49.7963 58.7356 48.4536 58.7332ZM23.7869 58.7332H15.5469C14.2037 58.7385 12.8729 58.4767 11.6318 57.9631C10.3907 57.4495 9.26415 56.6942 8.31757 55.7412C7.3674 54.7891 6.61467 53.6587 6.10259 52.4149C5.59051 51.1711 5.32917 49.8383 5.33357 48.4932V42.9866C5.33427 42.4559 5.54504 41.947 5.91981 41.5712C6.29458 41.1955 6.80287 40.9834 7.33357 40.9812C7.59666 40.9812 7.85717 41.0331 8.10017 41.134C8.34317 41.2348 8.56389 41.3826 8.74967 41.5689C8.93546 41.7552 9.08267 41.9763 9.18286 42.2196C9.28306 42.4628 9.33427 42.7235 9.33357 42.9866V48.4932C9.32886 49.7255 9.69067 50.9313 10.373 51.9575C11.0553 52.9836 12.0274 53.7836 13.1656 54.2559C13.9203 54.5685 14.73 54.7272 15.5469 54.7226H23.7869C24.05 54.7226 24.3105 54.7745 24.5535 54.8753C24.7965 54.9762 25.0172 55.124 25.203 55.3102C25.3888 55.4965 25.536 55.7176 25.6362 55.9609C25.7364 56.2042 25.7876 56.4648 25.7869 56.7279C25.7862 57.2586 25.5754 57.7675 25.2007 58.1432C24.8259 58.519 24.3176 58.7311 23.7869 58.7332ZM7.33357 23.0159C7.0707 23.0159 6.81041 22.9641 6.56759 22.8634C6.32476 22.7627 6.10417 22.6152 5.91841 22.4292C5.73266 22.2432 5.5854 22.0224 5.48505 21.7794C5.38469 21.5365 5.33322 21.2761 5.33357 21.0132V15.6666C5.3284 14.3215 5.58967 12.9888 6.10228 11.7452C6.6149 10.5016 7.36872 9.37193 8.32024 8.42124C10.2352 6.49867 12.8334 5.41241 15.5469 5.3999H23.7869C24.05 5.3999 24.3105 5.45181 24.5535 5.55265C24.7965 5.65349 25.0172 5.80129 25.203 5.98757C25.3888 6.17386 25.536 6.39496 25.6362 6.63823C25.7364 6.8815 25.7876 7.14214 25.7869 7.40524C25.7862 7.93594 25.5754 8.4448 25.2007 8.82056C24.8259 9.19633 24.3176 9.40845 23.7869 9.41057H15.5469C14.3146 9.41836 13.1119 9.78932 12.0893 10.4771C11.0666 11.1648 10.2695 12.1388 9.79757 13.2772C9.48484 14.0347 9.32707 14.8471 9.33357 15.6666V21.0132C9.33217 21.5435 9.12109 22.0517 8.74639 22.4268C8.3717 22.802 7.86382 23.0138 7.33357 23.0159Z"
                  fill="black"
                />
              </svg>
            </div>
            <h2>Consistent Quality</h2>
            <p>
              We focus on bringing your ideas to life while maintaining
              high-quality standards from start to finish. Each project goes
              through clear steps with regular updates, quality checks, and
              attention to detail at every stage
            </p>

            <div className="points">
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Clear and organized workflow</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p>Updates and previews after every major step</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> High-quality models and textures</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Project planning and timeline tracking</p>
              </div>
            </div>
          </div>
          <div className="card two">
            <div className="icon">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.6665 7H37.3331V14H16.3331V36.75L9.3331 42V32.6667H4.6665V7ZM18.6665 16.3333H51.3331V42H46.6665V51.3333L34.222 42H18.6665V16.3333Z"
                  fill="black"
                />
              </svg>
            </div>
            <h2>Great Communication</h2>
            <p>
              We believe communication is key to a smooth and enjoyable
              experience. Whether you're new to commissioning a model or a
              returning client, we make sure you always feel heard and
              supported.
            </p>

            <div className="points">
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p>Quick replies and friendly support</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Approval before moving forward at every step</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p>Clear and easy explanations for each part of the process</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Transparent pricing and timeline</p>
              </div>
            </div>
          </div>
          <div className="card three">
            <div className="icon">
              <svg
                width="64"
                height="66"
                viewBox="0 0 64 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_32_1633)">
                  <path
                    d="M32.3678 15.1013C33.2652 14.7428 34.243 14.6348 35.1969 14.7888C36.1509 14.9429 37.045 15.3532 37.7838 15.9759L38.1198 16.2826L50.7172 28.8799C51.4013 29.5633 51.8868 30.4199 52.1216 31.3579C52.3565 32.2959 52.3319 33.2801 52.0505 34.2053L51.8985 34.632L45.5918 50.3999C45.238 51.2826 44.6546 52.0547 43.9021 52.6361C43.1496 53.2175 42.2553 53.5871 41.3118 53.7066L27.7678 55.3999C27.4194 55.4408 27.055 55.4906 26.6745 55.5493L25.4905 55.7413L24.8718 55.8533L22.9438 56.2266L21.6238 56.5093L19.6372 56.9546L17.0905 57.5626L12.9518 58.6186L11.2292 59.0826C10.7944 59.2022 10.3367 59.2106 9.8978 59.1073C9.45893 59.004 9.05303 58.7921 8.71731 58.4911C8.38159 58.1902 8.12679 57.8098 7.97628 57.3848C7.82577 56.9598 7.78436 56.5038 7.85585 56.0586L7.94652 55.6693L8.73318 52.7039L9.43718 49.9093L10.0452 47.3626L10.4905 45.3759L10.7705 44.0533L11.1465 42.128L11.3598 40.9093L11.5305 39.768L13.2905 25.688C13.4014 24.819 13.7246 23.9908 14.2315 23.2764C14.7385 22.562 15.4136 21.9835 16.1972 21.5919L16.5998 21.4079L32.3678 15.1013ZM34.3465 20.0533L18.5812 26.36L17.0238 38.8186L16.8958 39.8746C16.6341 41.8363 16.2916 43.7864 15.8692 45.72L15.4132 47.8159L24.1812 39.0479C23.8772 37.9139 23.9559 36.7112 24.4052 35.6265C24.8544 34.5417 25.649 33.6355 26.6658 33.0484C27.6826 32.4614 28.8646 32.2262 30.0287 32.3794C31.1927 32.5326 32.2737 33.0657 33.1039 33.8959C33.9341 34.7261 34.4672 35.8071 34.6204 36.9711C34.7736 38.1352 34.5384 39.3172 33.9514 40.334C33.3643 41.3508 32.4581 42.1454 31.3733 42.5946C30.2886 43.0439 29.0859 43.1226 27.9518 42.8186L19.1838 51.5866L20.2292 51.3546L22.3198 50.9146C23.6228 50.6486 24.9326 50.4174 26.2479 50.2213L40.6398 48.4186L46.9465 32.6533L34.3465 20.0533ZM40.6478 11.2693C41.1067 10.8098 41.7174 10.5334 42.3655 10.4922C43.0136 10.451 43.6545 10.6476 44.1678 11.0453L44.4185 11.2693L55.7305 22.5813C56.2139 23.0601 56.4959 23.7055 56.519 24.3854C56.5421 25.0653 56.3044 25.7284 55.8546 26.2388C55.4048 26.7493 54.777 27.0685 54.0995 27.1312C53.4221 27.1938 52.7463 26.9952 52.2105 26.5759L51.9598 26.3519L40.6478 15.0399C40.1479 14.5399 39.8671 13.8617 39.8671 13.1546C39.8671 12.4475 40.1479 11.7694 40.6478 11.2693Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32_1633">
                    <rect
                      width="64"
                      height="64.2444"
                      fill="white"
                      transform="translate(0 0.899902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2>Flexible Art Styles</h2>
            <p>
              We’ve worked on many different types of models, so we can match
              the style you’re looking for — from cute and stylized to techy,
              realistic, or fantasy. Just tell us your vision, and we’ll help
              bring it to life.
            </p>

            <div className="points">
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Stylized (anime, cartoon, chibi)</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Semi-realistic</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Techy / sci-fi / mech</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p> Fantasy creatures and anthro characters</p>
              </div>
              <div className="point">
                <div className="icon">
                  <GrCheckmark />
                </div>
                <p>And many others!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SliderText />
    </main>
  );
}
