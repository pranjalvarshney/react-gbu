import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React from "react";

export const HeaderBrand = () => {
  return (
    <div className="header-brand">
      <div className="header-brand-wrapper">
        <div className="header-brand-name-wrapper">
          <img src="gbu.png" alt="logo" />
          <h4 className="brand-name">
              गौतम बुद्ध विश्वविद्यालय
              <br />
              GAUTAM BUDDHA UNIVERSITY
              <br />
          </h4>
        </div>
        <div className="header-brand-search-icons">
          <TextField variant="outlined"  placeholder="Search" size="small"/>
        </div>
      </div>
    </div>
  );
};
