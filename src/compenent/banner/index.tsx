import React from "react";
import Ball from "../ball";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-top">
        Creative Agency, Corporate and <br />
        Portfolio
        <span className="banner-text"> {` React JS `}</span>
        Template
      </div>
      <div className="banner-bottom">
        <div className="banner-bottom-item">
          <div className="banner-item-top">{`Demo Website(More Comming)`}</div>
          <div className="banner-item-bottom">5+</div>
        </div>
        <div className="banner-bottom-item">
          <div className="banner-item-top">Inner Page</div>
          <div className="banner-item-bottom">30+</div>
        </div>
        <div className="banner-bottom-item">
          <div className="banner-item-top">Elements</div>
          <div className="banner-item-bottom">30+</div>
        </div>
      </div>
      <Ball />
    </div>
  );
};

export default Banner;
