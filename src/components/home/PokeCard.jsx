import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export const PokeCard = ({ data }) => {
  const { id, sprites, types, name } = data;

  return (
    <Link to={"/details/" + id}>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sprites.front_default}
            alt="photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {types.map((type) => type.type.name + " ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
