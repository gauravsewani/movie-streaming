import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav({ profile }) {
  const [show, handleShow] = useState(false);

  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__contentsLeft">
          <img
            onClick={() => history("/")}
            className="nav__logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt=""
          />
          {!profile ? (
            <ul className="nav__contentsList">
              <li className="nav__contentsList--element">
                <a href="/">Home</a>
              </li>
              <li className="nav__contentsList--element">
                <a href="/">Tv Shows</a>
              </li>
              <li className="nav__contentsList--element">
                <a href="/">Movies</a>
              </li>
              <li className="nav__contentsList--element">
                <a href="/">New & Popular</a>
              </li>
              <li className="nav__contentsList--element">
                <a href="/">My List</a>
              </li>
              <li className="nav__contentsList--element">
                <a href="/">Browse by Language</a>
              </li>
            </ul>
          ) : (
            <div></div>
          )}
        </div>

        <img
          onClick={() => history("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
