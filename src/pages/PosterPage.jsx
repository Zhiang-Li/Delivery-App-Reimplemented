import React, {useRef} from "react";
import PosterNavBar from "../templates/PosterNavBar";
import PropTypes from "prop-types";

export default function PosterPage({onAddErrand}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const originRef = useRef();
  const destinationRef = useRef();
  const compensationRef = useRef();

  const onAddErrandHelper = (e) => {
    e.preventDefault();
    onAddErrand({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      compensation: compensationRef.current.value,
    });
  };


  return (
    <><PosterNavBar></PosterNavBar>
      <form className="posterForm">
        <h3>Post Your Errand</h3>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Item title" ref={titleRef}/>
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Write your description" 
            rows={3} ref={descriptionRef}/>
        </div>
        <div className="mb-3">
          <label>Delivery Date</label>
          <input
            type="date"
            className="form-control" ref={dateRef}/>
        </div>
        <div className="mb-3">
          <label>Delivery Time</label>
          <input
            type="time"
            className="form-control" ref={timeRef}/>
        </div>
        <div className="mb-3">
          <label>Origin</label>
          <input
            type="text"
            className="form-control" ref={originRef}/>
        </div>
        <div className="mb-3">
          <label>Destination</label>
          <input
            type="text"
            className="form-control" ref={destinationRef}/>
        </div>
        <div className="mb-3">
          <label>Compensation</label>
          <input
            type="number"
            className="form-control" ref={compensationRef}/>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={onAddErrandHelper}>
                  Post
          </button>
        </div>
      </form>
    </>
  );
}


PosterPage.propTypes = {
  onAddErrand: PropTypes.func.isRequired,
};