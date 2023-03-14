import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export const PokeCard = () => {

  return (
    <Link to={"/details/"}>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={""}
            alt="foto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
