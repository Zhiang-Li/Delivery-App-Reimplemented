import React from "react";
import { Link } from "react-router-dom";

export default function PosterNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/poster"}>
            Faster 🚚 Poster Account 📢
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/poster"}>
                  Post an Errand
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/currentErrand"}>
                  Errands Requested
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/errandHistory"}>
                  Errand History
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