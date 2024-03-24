import React from "react";
import { Link } from "react-router-dom";

export default function DelivererNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/deliverer"}>
            Faster 🚚 Deliverer Account 📢
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/deliverer"}>
                  Errand Board
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/ongoingErrands"}>
                  Ongoing Errands
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/completedErrands"}>
                  Completed Errands
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                  Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}