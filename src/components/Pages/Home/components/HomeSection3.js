import { Card, Grid, CardActionArea,Typography, CardContent } from "@material-ui/core";
import React from "react";
import { Container } from "react-bootstrap";

const exploreData = [
  
  {
    name: "Library",
    img:"../images/library.jpg"
  },
  {         
    name: "Arts/Culture",
    img: "../images/arts.jpg",
  },
  {
    name: "Meditation Center",
    img: "../images/meditation.jpg",
  },
  {
    name: "Sports",
    img: "../images/sports.jpg",
  },
];

export const HomeSection3 = () => {


  return (
    <div className="home-section-3">
      <Container>
        <h3 className="home-section-3-header mb-5">Explore</h3>
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

  return <Grid item xs={6} md={3} key={index}>
  {/* <Paper
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
  </Paper> */}
    <Card elevation={3}>
      <CardActionArea>
        <img width="100%" src={data.img} alt={data.img}/>
        <CardContent className="py-1 text-center">
          <Typography gutterBottom variant="button" style={{whiteSpace:"nowrap"}} >
            <b>{data.name}</b>
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>


</Grid>
}