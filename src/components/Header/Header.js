import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import { HeaderBrand } from "./components/HeaderBrand";
import { HeaderMain } from "./components/HeaderMain";
import { HeaderTop } from "./components/HeaderTop";
import "./Header.css";
import { HeaderCaption } from "./components/HeaderCaption";
import { HeaderContentWrapper } from "./components/HeaderContentWrapper";
import { HeaderBulletin } from "./components/HeaderBulletin";

const wallArray = ["../../images/wall1.jpg", "../../images/wall2.jpg", "../../images/wall3.jpg"];

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  const handleToggle = () => {
    console.log(toggleMenu)
    setToggleMenu(!toggleMenu)
  }
  
  return (
    <div className="header">
      <HeaderTop />
      <div style={{backgroundColor: "white", width:"100%",height:"100vh"}}>
      <Carousel indicators={false}  controls={false} interval={3000} >
        <Carousel.Item>
          <img src={wallArray[0]} alt="wall" className="wall-carousel" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={wallArray[1]} alt="wall" className="wall-carousel" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={wallArray[2]} alt="wall" className="wall-carousel" />
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="wall-carousel-wrapper">
        <HeaderBrand handleToggle={handleToggle}/>
        <HeaderMain toggleMenu={toggleMenu} handleToggle={handleToggle}/>
        <HeaderCaption />
        <HeaderBulletin />
        <HeaderContentWrapper/>
      </div>
    </div>
  );
};
