import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Container } from "react-bootstrap";

const arrayData = [
  {
    value: "10",
    caption: "University Schools",
  },
  {
    value: "50+",
    caption: "Departments & Centers",
  },
  {
    value: "100+",
    caption: "Programmes",
  },
];

const arrayProgrammes = [
  {
    name: "Under graduation",
    link: "/",
  },
  {
    name: "Post graduation",
    link: "/",
  },
  {
    name: "Ph.D/M.Phil",
    link: "/",
  },
  {
    name: "Certification/Diploma",
    link: "/",
  },
];

export const HomeSection1 = () => {
  return (
    <div className="home-section-1">
      <Container>
        <h3 className="home-section-1-header">Study at GBU</h3>
        <br/>
        <Grid container justify="center" spacing={3}>
          <Grid item md={4} xs={12}>
            <Typography variant="body1">
              We stimulate students vision and empower them to increase their
              vigor, by intuting exponential, experimental and inter-disciplinary learning in a research environment.
            </Typography>
          </Grid>
          {arrayData.map((data, index) => {
            return (
              <Grid item md={2} xs={6} key={index}>
                <Paper
                  elevation={3}
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  <h2 style={{ fontWeight: "600" }}>{data.value}</h2>
                  <Typography variant="button">{data.caption}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
          <Grid container justify="center" alignItems="center">
            <Paper style={{padding:".5rem",margin:"2rem 0"}} elevation={0}><Typography variant="h4" style={{fontFamily:"serif",fontWeight:"600"}} >Programmes <span style={{color:"#cc3636"}}>@GBU</span></Typography></Paper>
            <br/>
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={3}
              direction="row"
            >
              {arrayProgrammes.map((data, index) => {
                return (
                  <Grid item key={index} >
                    <Button
                    variant="contained"
                      style={{ textAlign: "center",backgroundColor:"#cc3636", color:"#fff", padding: "1rem 2rem " }}
                    >
                      <Typography>{data.name}</Typography>
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
      </Container>
    </div>
  );
};
