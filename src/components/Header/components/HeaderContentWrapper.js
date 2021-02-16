import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { MDBIcon } from "mdbreact";
import React from "react";

const dataArray = [
  {
    title: "Startups",
    description: "Success stories of researchers and students",
    color: "#000",
    bg: "#FFEBEE",
  },
  {
    title: "Placements",
    description: "Placement stories of researchers and students",
    color: "#fff",
    bg: "#cc3636"
  },
  {
    title: "Campus Life",
    description: "Campus life stories of researchers and students",
    color: "#000",
    bg: "#FFEBEE",
  },
  {
    title: "Research",
    description: "Research life stories of researchers and students",
    color: "#fff",
    bg: "#cc3636"
  },
];

export const HeaderContentWrapper = () => {
  return (
    <div className="header-content-wrapper">
      {dataArray.map((data, index) => {
        return (
          <Card elevation={3} key={index} style={{display:"flex",alignContent:"center",width:"18rem", height:"12rem", margin: "0 10px",textAlign:"center", backgroundColor:`${data.bg}`}}>
            <CardContent style={{color:`${data.color}`}}>
            <MDBIcon icon="atom" size="4x" />
              <Typography  variant="h6" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="body2">{data.description}</Typography>
            </CardContent>
        
          </Card>
        );
      })}
    </div>
  );
};
