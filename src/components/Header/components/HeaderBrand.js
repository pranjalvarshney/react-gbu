import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MenuIcon from '@material-ui/icons/Menu';

export const HeaderBrand = ({handleToggle}) => {
  const [openSearch, setOpenSearch] = useState(true);

  const handleSearchBtn = () => {
    setOpenSearch(true);
  };
  return (
    <div className="header-brand">
      <Container>
        <div className="header-brand-wrapper">
          <div className="header-brand-name-wrapper">
            <img src="gbu.png" alt="logo" />
            <h5 className="brand-name">
              गौतम बुद्ध विश्वविद्यालय, ग्रेटर नोएडा
              <br />
              GAUTAM BUDDHA UNIVERSITY, GREATER NOIDA
            </h5>
          </div>
          <div className="responsive-menu-btn">
            <IconButton onClick={handleToggle}>
              <MenuIcon style={{color: "#fff"}}/>
            </IconButton>
          </div>
          <div className="header-brand-search-icons">
            <div className="search-box">
              <input
                type="text"
                placeholder="search "
                className={`input-search ${openSearch ? "active " : ""}`}
              />
              <button
                className={`btn-search ${openSearch ? "animate" : ""}`}
                onClick={handleSearchBtn}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
