import React from "react";
import DelivererNavBar from "../templates/DelivererNavBar";
import PropTypes from "prop-types";
import ErrandB from "../components/ErrandB";

export default function DelivererPage({myErrands, onAcceptErrand}){
  return(
    <><DelivererNavBar></DelivererNavBar>
      <div className="list-group-current">
        {myErrands.map((p, i) => (
          <ErrandB key={i} errand={p} onAcceptErrand={onAcceptErrand}></ErrandB>
        ))}
      </div>
    </>
  );
}

DelivererPage.propTypes = {
  myErrands: PropTypes.array.isRequired,
  onAcceptErrand: PropTypes.func.isRequired,
};