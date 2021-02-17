import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import EventIcon from "@material-ui/icons/Event";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const exploreData = [
  {
    name: "News/Events",
    icon: EventIcon,
  },
  {
    name: "Library",
    icon: "LocalLibraryIcon",
  },
  {
    name: "Arts/Culture",
    icon: "",
  },
  {
    name: "Meditation Center",
    icon: "",
  },
  {
    name: "Sports",
    icon: "",
  },
  {
    name: "Startups & Incubation",
    icon: "",
  },
  {
    name: "Center Computer Center",
    icon: "",
  },
  {
    name: "Clubs",
    icon: "",
  },
];

export const HomeSection3 = () => {


  return (
    <div className="home-section-3">
      <Container>
        <h3 className="home-section-3-header mb-3">Explore</h3>
        <Grid container justify="center" spacing={3} alignItems="center">
          {exploreData.map((data, index) => {
            
            return TabsSection(data,index)
          })}
        </Grid>
      </Container>
    </div>
  );
};

const TabsSection = (data,index) =>{
  const [hoverStatus, setHoverStatus] = useState(false)
  return <Grid item xs={6} md={3} key={index}>
  <Paper
    variant="elevation"
    elevation={3}
    onMouseEnter={() => setHoverStatus(true)}
    onMouseLeave={() => setHoverStatus(false)}
    style={{ 
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      height: "8rem",
      textAlign: "center",
      backgroundColor: `${hoverStatus? "#cc3636":"#fff"}`,
      color: `${hoverStatus ? "#fff": "#000"}`
    }}
  >
    <Typography variant="h5">{data.name}</Typography>
  </Paper>

</Grid>
}