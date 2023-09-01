import React from "react";
import "./coaches.css";
import coachesData from "../../data/coachesData";

const CoachPage = () => {
  return (
    <>
      <div className="coachesPage">
        <div className="coachesPage-subtitle">Learn Chess From The Best</div>
        <div className="coachesPage-description">
          ProChess Training is a chess training platform that provides chess
          lessons from the best chess players in the world. Our mission is to
          help you improve your chess skills and become a better chess player.
        </div>
        {/* <div className="coachesPage-coaches"> */}
        <div className="row">
          {coachesData.map((coach) => (
            // <div className="coachesPage-coach">
            //   <img
            //     className="coachesPage-coach-image"
            //     src={coach.image}
            //     alt={coach.name}
            //     width={150}
            //     height={150}
            //   />
            //   <div className="coachesPage-coach-name">{coach.name}</div>
            //   <div className="coachesPage-coach-description">
            //     {coach.description}
            //   </div>
            // </div>
            <div className="column">
              <div className="card">
                <img
                  className="coachesPage-coach-image"
                  src={coach.image}
                  alt={coach.name}
                  width={150}
                  height={150}
                />
                <div className="coachesPage-coach-name">{coach.name}</div>
                <div className="coachesPage-coach-description">
                  {coach.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default CoachPage;
