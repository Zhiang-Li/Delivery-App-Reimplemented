import React from "react";
import DelivererNavBar from "../templates/DelivererNavBar";
import PropTypes from "prop-types";
import ErrandO from "../components/ErrandO";

export default function OngoingErrandPage({ongoingErrands, onCompleteErrand, onCancelErrand}){
  return(
    <><DelivererNavBar></DelivererNavBar>
      <div className="list-group-current">
        {ongoingErrands.map((p, i) => (
          <ErrandO key={i} errand={p} onCompleteErrand={onCompleteErrand} onCancelErrand={onCancelErrand}></ErrandO>
        ))}
      </div>
    </>
  );
}
OngoingErrandPage.propTypes = {
  ongoingErrands: PropTypes.array.isRequired,
  onCompleteErrand: PropTypes.func.isRequired,
  onCancelErrand: PropTypes.func.isRequired,
};