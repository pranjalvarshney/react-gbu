import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';       
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';       
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
              style={{ backgroundColor: "#0000007a", borderRadius: "50px" }}
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
                    padding: "5px 0",
                    margin:"auto",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                >
                  <Typography variant="caption"><span><ArrowLeftIcon/></span>Bulletin   </Typography>
                </Grid>
                <Grid item xs={9} md={10} lg={11} style={{color: "#fff", padding: "2px 1rem 0 1rem" }}>
                  <marquee>
                    {bulletinArray.map((data, index) => {
                      return (
                        <Typography
                          key={index}
                          onClick={() => {
                            window.open(data.link);
                          }}
                          variant="caption"
                          style={{cursor:"pointer"}}
                        >
                          <span><ArrowRightIcon/> </span>{data.name} 
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
