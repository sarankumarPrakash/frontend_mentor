import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "./Images/Omelette.webp";
import "./App.css";
import { Divider, List } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
    >
      <Card sx={{ width: "40%", borderRadius: '20px', backgroundColor: 'white !important' }}>

        <CardMedia
          sx={{ height: 200, borderRadius: "20px" ,width:'80%', margin: 'auto',marginTop:'3%'}}
          image={Image}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            Simple Omelette recipe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An easy and quick dish, perfectfor any meal.This calssic Omelette
            combines beaten egges cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </Typography>
          <Card
            sx={{ width: "100%", backgroundColor: "aliceblue !important",marginTop:'3%' }}
            elevation={1}
          >
            <CardContent>
              <Typography style={{ fontWeight: "bold" }}>Preparation time</Typography>
              <ul>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Total:</span>{" "}
                  Approximately 10 minutes
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>preperation:</span> 5
                  minutes
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Cooking:</span> 5 minutes
                </li>
              </ul>
            </CardContent>
          </Card>
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" ,marginTop:'3%' }}
          >
            Ingredients
          </Typography>
          <ul>
            <li> 2-3 large eggs</li>
            <li> salt, to taste</li>
            <li> peper, to taste</li>
            <li> 1 tablesppon of butter or oil</li>
            <li>
              {" "}
              optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <Divider />
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" ,marginTop:'3%' }}
          >
            Instructions
          </Typography>

          <ol>
            <li>
              {" "}
              <span style={{ fontWeight: "bold" }}>Preparation : </span>Crack
              the eggs into a bowl. Add a pinch of salt and pepper to taste. If
              you like your omelette to be a bit fluffier, you can also add a
              splash of milk or water to the eggs and beat them together until
              well mixed.
            </li>
            <li style={{marginTop:'3%'}}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Heat the Pan : </span>Place a
              non-stick frying pan over medium heat and let it warm up for a
              minute or two.
            </li>

            <li style={{marginTop:'3%'}}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Add Eggs : </span>Once the
              pan is hot, pour the beaten eggs into the pan.
            </li>
            <li style={{marginTop:'3%'}}>
              <span style={{ fontWeight: "bold" }}>Swirl and Cook : </span>As
              the eggs start to set around the edges, use a spatula to gently
              push the cooked edges toward the center of the pan, allowing the
              uncooked eggs to flow to the edges. Tilt the pan to let the
              uncooked eggs fill any gaps.
            </li>
            <li style={{marginTop:'3%'}}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Add Fillings :</span> Once
              the eggs are mostly set but still slightly runny on top, add your
              desired fillings to one half of the omelette. This could include
              cheese, vegetables, cooked meats, or anything else you like in
              your omelette.
            </li>
            <li style={{marginTop:'3%'}}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Fold and Serve :</span> Using
              a spatula, carefully fold the empty half of the omelette over the
              side with the fillings, creating a half-moon shape. Let it cook
              for another minute or so until the fillings are warmed through and
              the eggs are fully set.
            </li>
            <li style={{marginTop:'3%'}}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Serve : </span> Slide the
              omelette onto a plate and serve hot. You can garnish with some
              fresh herbs or additional toppings if desired.
            </li>
          </ol>
          <Divider />
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold",marginTop:'3%' }}
          >
            Nutrition
          </Typography>
          <Typography style={{marginTop:'3%'}}>
            {" "}
            The table belo shows Nutrition values per serving without additional
            filings.
          </Typography>

          <TableContainer>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="center">Calories</TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>277kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Carbs</TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>0g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Protein</TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>20g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Fat</TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>22g</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
