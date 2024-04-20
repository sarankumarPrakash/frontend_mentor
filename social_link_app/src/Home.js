import React from "react";
import { Card, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "./Images/avatar.jpeg";
import Avatar from "@mui/material/Avatar";

const Home = () => {
  return (
    <div className="main" style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "20%",marginTop:'10%',backgroundColor:'#282828' }}>
        <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar alt="Avatar" src={Image} sx={{ width: 100, height: 100 }} />
          <Typography style={{ textAlign: "center",  color:'white',marginTop:'2%' }}>
            Jessica Randall
          </Typography>
          <Typography style={{ textAlign: "center" ,  color:'yellow',marginTop:'2%' }}>
            London, United Kingdom
          </Typography>
          <Typography style={{ textAlign: "center",  color:'white',marginTop:'2%' }}>
            {" "}
            {' "Front-end developer and avid reader." '}
          </Typography>
          <Stack direction="column" spacing={3} style={{ marginTop: '5%' }}>
            <Button variant="contained" style={{ width: '15vw',fontWeight:'bold',textTransform:'capitalize',backgroundColor:'#404040' }}>GitHub</Button>
            <Button variant="contained" style={{ width: '15vw',fontWeight:'bold',textTransform:'capitalize',backgroundColor:'#404040' }} >Frontend Mentor</Button>
            <Button variant="contained" style={{ width: '15vw',fontWeight:'bold',textTransform:'capitalize',backgroundColor:'#404040' }}>Linkedin</Button>
            <Button variant="contained" style={{ width: '15vw',fontWeight:'bold',textTransform:'capitalize',backgroundColor:'#404040' }}>Twitter</Button>
            <Button variant="contained" style={{ width: '15vw',fontWeight:'bold',textTransform:'capitalize',backgroundColor:'#404040' }}>Instagram</Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
