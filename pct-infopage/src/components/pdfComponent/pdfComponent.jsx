import React from "react";
import "./pdfComponent.css";

const PdfComponent = ({ group }) => {
  console.log(` /Group${group}_May2023.pdf`);
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
      <button
        className="body-enroll-button"
        onClick={() => {
          window.open(BASEURL + group, "_blank");
        }}
      >
        Enroll
      </button>
      <div className="body-title">Schedule</div>
      <div className="body-pdf">
        <object
          data={`/Group${group}_May2023.pdf`}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object>
      </div>
    </>
  );
};

export default PdfComponent;
