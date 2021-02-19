import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { TextFields } from "@material-ui/icons";
import React from "react";
import { Container } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';

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
    name: "M.Phil./Ph.D.",
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
        <br />
        <Grid container justify="center" spacing={3}>
          <Grid item md={4} xs={12}>
            <Typography variant="body1">
              We stimulate students' vision and empower them to increase their
              vigor, by intuting exponential, experimental and
              inter-disciplinary learning in a research environment.
            </Typography>
          </Grid>
          {arrayData.map((data, index) => {
            return (
              <Grid item key={index}>
                <Paper
                  elevation={3}
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  <h1 style={{ fontWeight: "800" }}>{data.value}</h1>
                  <Typography variant="button">{data.caption}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Paper style={{ padding: ".5rem", margin: "2rem 0" }} elevation={0}>
            <Typography
              style={{
                fontWeight: "700",
                fontSize:"40px"
              }}
            >
              Programmes
            </Typography>
          </Paper>
          <br />
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={3}
            direction="row"
          >
            {arrayProgrammes.map((data, index) => {
              return (
                <Grid item key={index}>
                  <Button
                    variant="contained"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#cc3636",
                      color: "#fff",
                      padding: "1rem 2rem ",
                    }}
                  >
                    <Typography>{data.name}</Typography>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
         <Grid className="my-3" container justify="center" alignItems="center">
          <Grid item lg={8} xs={10}>
            <input className="home-section-1-search" placeholder={`   Search for courses, programmes....`}/>
          </Grid>
         </Grid>
        </Grid>
      </Container>
    </div>
  );
};
