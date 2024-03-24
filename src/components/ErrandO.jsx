import React from "react";
import PropTypes from "prop-types";


export default function ErrandO({errand, onCompleteErrand, onCancelErrand}){
  const onCompleteErrandHelper = () =>{
    onCompleteErrand(errand);
  };
  const onCancelErrandHelper = () =>{
    onCancelErrand(errand);
  };
  return(
    <a className="list-group-item list-group-item-action active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Title: {errand.title}</h5>
        
        <small>Compensation: {errand.compensation}</small>
        
      </div>
      <p className="mb-1">Description:{errand.description}</p>
      
      <small><button onClick={onCompleteErrandHelper}>Complete</button> 
        <button onClick={onCancelErrandHelper}>Cancel</button></small>

    </a>
  );
}

ErrandO.propTypes = {
  errand: PropTypes.object.isRequired,
  onCompleteErrand: PropTypes.func.isRequired,
  onCancelErrand: PropTypes.func.isRequired,
};