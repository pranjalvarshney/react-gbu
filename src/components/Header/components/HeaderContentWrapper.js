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
    bg: "#FFCDD2",
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
    bg: "#FFCDD2",
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
          <Card key={index} style={{display:"flex",alignContent:"center",width:"18rem", height:"12rem", margin: "auto 10px",textAlign:"center", backgroundColor:`${data.bg}`}}>
            <CardContent style={{color:`${data.color}`}}>
            <MDBIcon icon="atom" size="4x" />
              <Typography  gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="caption">{data.description}</Typography>
            </CardContent>
        
          </Card>
        );
      })}
    </div>
  );
};
