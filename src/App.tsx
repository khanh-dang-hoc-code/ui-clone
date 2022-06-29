import React, { useEffect, useRef, useState } from "react";
import Header from "./compenent/header";
import "./App.css";
import changeTheme from "./assessts/svgIcons/lightbulb-solid.svg";
import Ball from "./compenent/ball";
import { Carousel } from "react-responsive-carousel";
import Banner from "./compenent/banner";
import Slider from "./compenent/slider";

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
        <Slider />
      </div>
    </div>
  );
};

export default App;
