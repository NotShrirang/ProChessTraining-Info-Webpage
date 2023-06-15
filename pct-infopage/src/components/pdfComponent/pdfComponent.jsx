import React from "react";
import "./pdfComponent.css";

const PdfComponent = ({ group }) => {
  const BASEURL =
    "https://prochesstraining.com/register_direct/set_enrollment/";
  const price = { 1: "INR 4300", 2: "INR 5000", 3: "INR 5750", 5: "INR 18250" }[
    group
  ];

  if (group == "0") {
    return <></>;
  }
  return (
    <>
      <hr color="#ffde00" style={{ width: "80vw" }} />
      <div className="body-title">Group {group}</div>
      <div className="body-pricing-container">
        <div className="body-pricing-title">Pricing/month:</div>
        <div className="body-pricing-price">{price}</div>
      </div>
      <div className="body-button-container">
        <button
          className="body-button"
          onClick={() => {
            window.open(BASEURL + group, "_blank");
          }}
        >
          Start Learning
        </button>
      </div>
      <div className="body-schedule">Schedule</div>
      <div className="body-pdf">
        {/* <object
          data={`/Group${group}_June2023.pdf`}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object> */}
        <a href={`/Group${group}_June2023.pdf`}>
          <img
            src={`/Group${group}_June2023.png`}
            alt={`/Group${group} - June 2023 Schedule`}
            width="100%"
            height="100%"
          />
        </a>
      </div>
    </>
  );
};

export default PdfComponent;
