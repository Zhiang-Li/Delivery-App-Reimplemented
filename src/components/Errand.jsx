import React from "react";
import PropTypes from "prop-types";


export default function Errand({errand}){
  return(
    <a className="list-group-item list-group-item-action active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Title: {errand.title}</h5>
        
        <small>Compensation: {errand.compensation}</small>
        
      </div>
      <p className="mb-1">Description:{errand.description}</p>
      
      <small>Destination: {errand.destination}</small>

    </a>
  );
}

Errand.propTypes = {
  errand: PropTypes.object.isRequired,
};