import React from "react";
import { HeaderBrand } from "./components/HeaderBrand";
import { HeaderMain } from "./components/HeaderMain";
import { HeaderTop } from "./components/HeaderTop";
import "./Header.css"

export const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBrand/>
      <HeaderMain/>
    </div>
  );
};
