import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Header({ inputValue }) {
  const [openMenu, setMenu] = useState(false);
  function handleChange(e) {
    inputValue(e.target.value);
  }

  function handleToggle(e) {
    setMenu(!openMenu);
  }

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img className="header_icon" src={logo} alt="cineFlix" width="40" height="40" />
            <p className="logo_txt">
              <span id="h-2">CineFlix</span>
            </p>
          </div>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <div className="search_bar">
            <div className="content">
              <button className="search">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <div className="input">
                <input type="text" className="input_text" placeholder="search movies.." onChange={handleChange} />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span id="page">Discover</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span id="page">Browse</span>
        </Link>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <button className="toggler" onClick={handleToggle}>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </button>

          {openMenu ? (
            <ul className="item_block">
              <li className="item"></li>
              <li className="item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span>Discover</span>
                </Link>
              </li>
              <li className="item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span>Browse</span>
                </Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
