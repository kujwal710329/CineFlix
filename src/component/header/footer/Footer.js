import React from "react";
import "./Footer.css";
import i1 from "../../../img/facebook.png";
import i2 from "../../../img/instagram.png";
import i3 from "../../../img/twitter.png";
import i4 from "../../../img/youtube.png";

export default function Footer() {
  return (
    <>
      <div className="footersection">
        <div className="sec">
          <p>You can find us at</p>
          <div className="socialmedia">
            <i>
              <img className="icon" src={i1} alt={i1} />
            </i>

            <i>
              <img className="icon" src={i2} alt={i2} />
            </i>
            <i>
              <img className="icon" src={i3} alt={i3} />
            </i>
            <i>
              <img className="icon" src={i4} alt={i4} />
            </i>
          </div>
          <div className="moviefyfoot"> CineFlix</div>
          <div className="rights">© 2023 by CineFlix.com | Ujjwal kumar, Inc.</div>
        </div>
      </div>
    </>
  );
}
