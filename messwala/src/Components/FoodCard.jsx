import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./FoodCard.module.css";
import { useHistory } from "react-router-dom";
export default function FoodCard() {
  const history = useHistory 
  const handleCard = ()=>{
   history.push("/messdatapage")
  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleCard}>
      <CardMedia
        component="img"
        height="250"
        image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y7ywapcvtgxxsnr7gefn"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          RAAHI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Indian
        </Typography>

        <div className={styles.description_card}>
          <div className={styles.star_rating}>
            <AiOutlineStar />
            <p style={{ marginTop: "-1px" }}>4.9</p>
          </div>

          <div>
            <p>35 MINS</p>
          </div>

          <div>
            <p>₹500 FOR TWO</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
