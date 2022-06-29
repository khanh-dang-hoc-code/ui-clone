import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import "./Header.css";
import Props from "./Props";

const Header = () => {
  const [status, setStatus] = useState("relative");

  const wrapperApp = useRef() as any;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var doc = document.documentElement;
      var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top >= 82) {
        setStatus("fixed");
      } else {
        setStatus("relative");
      }
    });
  }, []);
  return (
    <div ref={wrapperApp} className={`header-component ${status}`}>
      <div className="header-content">
        <div className="header-left">
          <div className="header-icon"></div>
          <div className="header-title">Abstrak</div>
        </div>
        <div className="header-right">
          <ul className="header-nav">
            <li className="nav-item">
              <a className="nav-item-link" href="#">
                Demo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#">
                Documention
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#">
                Support Ticket
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link header-button" href="#">
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
