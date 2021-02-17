import React from "react";
import { Button } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const HeaderMain = ({ toggleMenu, handleToggle }) => {
  return (
    <div
      className={`header-main ${toggleMenu ? "responsive-header-main" : ""}`}
    >
      <ul className="main-navigation-ul">
        <li className="main-navigation-li">About GBU</li>
        <li className="main-navigation-li">Admissions</li>
        <li className="main-navigation-li">Academics</li>
        <li className="main-navigation-li">Research</li>
        <li className="main-navigation-li">Campus Life</li>
      </ul>
      {toggleMenu ? <Button variant="text" style={{color:"#fff",margin:"6rem 0 0 0"}} onClick={handleToggle}><HighlightOffIcon className="mr-1"/> Close </Button> : ""}
    </div>
  );
};
