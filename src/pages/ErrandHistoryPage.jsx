import React from "react";
import PosterNavBar from "../templates/PosterNavBar";
import PropTypes from "prop-types";
import Errand from "../components/Errand";

export default function ErrandHistory({completedErrands}){
  return(
    <><PosterNavBar></PosterNavBar>
      <div className="list-group-current">
        {completedErrands.map((p, i) => (
          <Errand key={i} errand={p}></Errand>
        ))}
      </div>
    </>
  );
}

ErrandHistory.propTypes = {
  completedErrands: PropTypes.array.isRequired,
};
