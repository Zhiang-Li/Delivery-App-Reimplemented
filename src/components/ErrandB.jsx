import React from "react";
import PropTypes from "prop-types";


export default function ErrandB({errand, onAcceptErrand}){

  const onAcceptErrandHelper = () =>{
    onAcceptErrand(errand);
  };
  return(
    <a className="list-group-item list-group-item-action active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Title: {errand.title}</h5>
        
        <small>Compensation: {errand.compensation}</small>
        
      </div>
      <p className="mb-1">Description:{errand.description}</p>
      <small><button onClick={onAcceptErrandHelper}>Accept the Errand</button></small>
    </a>
  );
}

ErrandB.propTypes = {
  errand: PropTypes.object.isRequired,
  onAcceptErrand: PropTypes.func.isRequired,
};