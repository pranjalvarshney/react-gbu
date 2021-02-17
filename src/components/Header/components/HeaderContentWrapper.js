import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { MDBIcon } from "mdbreact";
import React from "react";
import { Container } from "react-bootstrap";

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
    bg: "#cc3636",
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
    bg: "#cc3636",
  },
];

export const HeaderContentWrapper = () => {
  return (
    <Container>
      <Grid container spacing={3} justify="center" alignItems="center">
      {dataArray.map((data, index) => {
        return (
          <Grid item key={index} xs={6} md={3}>
            <Card
              elevation={3}
              style={{
                display: "flex",
                alignItems: "center",
                height: "12rem",
                margin: "0 10px",
                textAlign: "center",
                backgroundColor: `${data.bg}`,
              }}
            >
              <CardContent style={{ color: `${data.color}` }}>
                <MDBIcon icon="atom" size="4x" />
                <Typography variant="h6" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="caption">{data.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
    </Container>
  );
};
