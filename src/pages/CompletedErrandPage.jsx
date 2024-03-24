import React from "react";
import DelivererNavBar from "../templates/DelivererNavBar";
import PropTypes from "prop-types";
import Errand from "../components/Errand";


export default function CompletedErrandPage({completedErrands}){
  return(
    <><DelivererNavBar></DelivererNavBar>
      <div className="list-group-current">
        {completedErrands.map((p, i) => (
          <Errand key={i} errand={p}></Errand>
        ))}
      </div>
    </>
  );
}

CompletedErrandPage.propTypes = {
  completedErrands: PropTypes.array.isRequired,
};
