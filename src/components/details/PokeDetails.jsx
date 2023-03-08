import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const PokeDetails = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={""} alt="photo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {"Pikachu"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Electrico"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
