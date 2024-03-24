import React from "react";
import PosterNavBar from "../templates/PosterNavBar";
import PropTypes from "prop-types";
import Errand from "../components/Errand";

export default function CurrentErrandPage({myErrands}){
  return(
    <><PosterNavBar></PosterNavBar>
      <div className="list-group-current">
        {myErrands.map((p, i) => (
          <Errand key={i} errand={p}></Errand>
        ))}
      </div>
    </>
  );
}

CurrentErrandPage.propTypes = {
  myErrands: PropTypes.array.isRequired,
};