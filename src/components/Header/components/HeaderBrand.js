import React, { useState } from "react";
import { Container } from "react-bootstrap";

export const HeaderBrand = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearchBtn = () => {
    setOpenSearch(!openSearch);
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
          <div className="header-brand-search-icons">
            <div class="search-box">
              <input
                type="text"
                placeholder="search here..."
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
