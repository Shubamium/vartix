import React from "react";

type Props = {};

// Todo Add Intersection Obvserver Optimization
const WorkList = (props: Props) => {
  return (
    <section id="work-list">
      <div className="title">
        <h2>OUR SAMPLE</h2>
        <h2 className="hstroke">
          WORKS
          <svg
            width="408"
            height="42"
            viewBox="0 0 408 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.24854 37.9224C106.073 27.6912 207.898 17.46 268.514 11.824C329.13 6.18794 345.451 5.45714 354.59 4.95886C363.729 4.46059 365.19 4.21699 366.187 4.5787C367.183 4.94041 367.671 5.91481 367.069 7.02578C363.893 12.8897 357.366 14.0348 351.095 17.1204C349.746 17.7841 348.995 18.2277 349.714 18.6005C355.829 21.7678 362.489 17.9915 372.675 16.7661C376.231 16.3383 380.633 16.5151 382.405 17.0023C384.176 17.4895 383.202 18.4639 382.091 19.4531C379.816 21.4788 377.533 22.9078 376.544 23.8896C376.192 24.2381 377.503 24.8713 378.736 24.8787C384.767 24.9148 389.565 22.6716 394.972 21.8079C396.926 21.4958 398.431 21.1952 399.538 20.9442C399.971 20.846 399.914 22.1548 399.062 23.2658C394.906 28.6807 391.064 29.3078 390.809 29.6769C388.156 33.5211 397.693 28.577 398.8 28.2042C399.173 28.0787 399.176 29.0495 398.811 29.6695C398.445 30.2896 397.715 30.7768 397.825 31.1496C397.936 31.5224 398.91 31.766 399.9 31.8915C400.889 32.0169 401.863 32.0169 403.605 33.4933"
              stroke="#FC69B0"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </h2>
      </div>
      <div className="list">
        <div className="showcase">
          <img src="/d/imload.gif" alt="" className="display it loading" />
          <div className="bottom">
            <img src="/g/showcase.png" alt="" className="display ibl" />
            <img src="/g/showcase.png" alt="" className="display ibr" />
          </div>
        </div>
        <div className="showcase">
          <img src="/d/imload.gif" alt="" className="display it loading" />
          <div className="bottom">
            <img src="/g/showcase.png" alt="" className="display ibl" />
            <img src="/g/showcase.png" alt="" className="display ibr" />
          </div>
        </div>
        <div className="showcase">
          <img src="/d/imload.gif" alt="" className="display it loading" />
          <div className="bottom">
            <img src="/g/showcase.png" alt="" className="display ibl" />
            <img src="/g/showcase.png" alt="" className="display ibr" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;
