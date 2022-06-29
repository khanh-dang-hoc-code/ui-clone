import React, { useEffect, useRef, useState } from "react";
import Header from "./compenent/header";
import "./App.css";
import changeTheme from "./compenent/assessts/svgIcons/lightbulb-solid.svg";
import Ball from "./compenent/ball";
import { Carousel } from "react-responsive-carousel";
import Banner from "./compenent/banner";

const App = () => {
  return (
    <div className="wrapper-app">
      <div className="select-themes">
        <img
          className="select-themes-icon"
          src={changeTheme}
          alt="Change Themes"
        />
      </div>
      <div className="app">
        <Header />
        <Banner />
      </div>
    </div>
  );
};

export default App;
