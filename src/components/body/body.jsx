import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./body.css";
import PdfComponent from "../pdfComponent/pdfComponent";

const handleStartLearning = () => {
  window.open("https://prochesstraining.com/register", "_blank");
};

const Body = () => {
  const [group, setGroup] = useState(0);
  const route = useParams();

  useEffect(() => {
    const group = localStorage.getItem("group");
    if (group != undefined) {
      setGroup(group);
    } else {
      setGroup(0);
    }
    if (route.groupId == undefined) {
      return;
    } else if (["1", "2", "3", "5"].includes(route.groupId)) {
      route.groupId && setGroup(route.groupId);
    } else {
      window.location.href = "/";
    }
  });

  function pageScroll(counter) {
    if (counter == 0) {
      return;
    }
    window.scrollBy(0, 15);
    scrolldelay = setTimeout(() => {
      pageScroll(counter - 1);
    }, 10);
  }

  const handleGroupChange = (e) => {
    localStorage.setItem("group", e.target.value);
    setGroup(e.target.value);
    pageScroll(30);
  };

  return (
    <div className="body">
      <div className="body-subtitle">Learn Chess From The Best</div>
      <div className="body-description">
        ProChess Training is a chess training platform that provides chess
        lessons from the best chess players in the world. Our mission is to help
        you improve your chess skills and become a better chess player.
      </div>
      <div className="body-dropdown">
        <div className="body-dropdown-title">Select Group:</div>
        <select
          className="body-dropdown-select"
          value={group}
          onChange={handleGroupChange}
        >
          <option className="body-dropdown-select-option" value="0">
            Select Group
          </option>
          <option className="body-dropdown-select-option" value="1">
            Group 1 (1000 - 1400)
          </option>
          <option className="body-dropdown-select-option" value="2">
            Group 2 (1400 - 1800)
          </option>
          <option className="body-dropdown-select-option" value="3">
            Group 3 (1800 - 2300)
          </option>
          <option className="body-dropdown-select-option" value="5">
            Elite Group (Above 2300)
          </option>
        </select>
        <br />
      </div>
      <PdfComponent group={group} />
    </div>
  );
};

export default Body;
