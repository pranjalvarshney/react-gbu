import {
  Paper,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { MDBIcon } from "mdbreact";
import React from "react";
import { Container } from "react-bootstrap";

const dataArray = [
  {
    title: "Research",
    description: "Research life stories of researchers and students",
    color: "#000",
    bg: "#FFEBEE",
  },
  {
    title: "Placements",
    description: "Placement stories of researchers and students",
    color: "#fff",
    bg: "#cc3636",
  },
  {
    title: "Startups",
    description: "Success stories of researchers and students",
    color: "#000",
    bg: "#FFEBEE",
  },
  {
    title: "Admissions",
    description: "Apply here now",
    color: "#fff",
    bg: "#cc3636",
  },
];

export const HeaderContentWrapper = () => {
  return (
    <Container>
      <Grid className="mb-3" container spacing={3} justify="space-between" alignItems="center">
      {dataArray.map((data, index) => {
        return (
          <Grid item key={index} xs={6} md={3} >
            <Paper
              elevation={3}
              style={{
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
                height: "12rem",
                textAlign: "center",
                backgroundColor: `${data.bg}`,
              }}
            >
              <CardContent style={{ color: `${data.color}`,textAlign:"center" }}>
                <MDBIcon icon="atom" size="4x" />
                <Typography variant="h6" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="caption" style={{textAlign:"center"}}>{data.description}</Typography>
              </CardContent>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
    </Container>
  );
};
