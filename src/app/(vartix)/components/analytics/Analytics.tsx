"use client";
import React, { useEffect } from "react";

type Props = {};
import "./analytics.scss";

import { GoogleAnalytics } from "@next/third-parties/google";
export default function Analytics({}: Props) {
  const [show, setShow] = React.useState(true);
  const [accepted, setAccepted] = React.useState(false);

  const acceptAnalytics = () => {
    localStorage.setItem("analytics_accepted", "true");
    setAccepted(true);
    setShow(false);
  };
  useEffect(() => {
    const accepted = localStorage.getItem("analytics_accepted");
    if (accepted && accepted === "true") {
      acceptAnalytics();
    } else if (accepted && accepted === "false") {
      setShow(false);
    }
  }, []);
  const rejectAnalytics = () => {
    localStorage.setItem("analytics_accepted", "false");
    setShow(false);
  };
  return (
    <>
      {show && (
        <div id="analytics_pop-up">
          <div className="panel">
            <h2>We Respect Your Privacy</h2>
            <p>
              To provide the best experience on our website, we use cookies to
              remember your preferences, analyze site performance, and improve
              our content and services You can accept all cookies, reject
              non-essential cookies.
            </p>
            <div className="action">
              <button className="btn btn-main" onClick={acceptAnalytics}>
                Accept Cookies
              </button>
              <button className="btn btn-main reject" onClick={rejectAnalytics}>
                Reject Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {accepted && <GoogleAnalytics gaId="G-G84XFCDS1P" />}
    </>
  );
}
