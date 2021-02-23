import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Container } from "react-bootstrap";

const bulletinArray = [
  {
    name:
      "First International Conference on Artificial Intelligence and Sustainable Computing for Smart Cities -AIS2C2 (22-23 March 2021)",
    link: "https://aiscindia2021.com/",
  },
  {
    name: "GBU Digital Job Fair 2020",
    link: "https://gbujobs.com/",
  },
];

export const HeaderBulletin = () => {
  return (
    <div className="header-bulletin my-3">
      <Container>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Paper
              elevation={3}
              style={{ backgroundColor: "#fff", borderRadius: "50px" }}
            >
              <Grid container alignItems="center">
                <Grid
                  item
                  xs={3}
                  md={2}
                  lg={1}
                  style={{
                    backgroundColor: "#cc3636",
                    color: "#fff",
                    padding: "8px 0",
                    margin: "auto",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                >
                  <Typography variant="button" style={{marginLeft:"1rem"}}>
                    {/* <span>
                      <ArrowLeftIcon />
                    </span> */}
                    <b>{" "}Bulletin</b>{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  md={10}
                  lg={11}
                  style={{ color: "#000080", padding: "2px 1rem 0 1rem" }}
                >
                  <marquee>
                    {bulletinArray.map((data, index) => {
                      return (
                        <Typography
                          key={index}
                          onClick={() => {
                            window.open(data.link);
                          }}
                          variant="overline"
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            <ArrowRightIcon />{" "}
                          </span>
                          <b>
                          {data.name}</b>
                        </Typography>
                      );
                    })}
                  </marquee>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
