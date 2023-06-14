import React from "react";
import "./pdfComponent.css";

const PdfComponent = ({ group }) => {
  console.log(` /Group${group}_May2023.pdf`);
  if (group == "0") {
    return <></>;
  }
  return (
    <>
      <hr color="#ffde00" style={{ width: "80vw" }} />
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
