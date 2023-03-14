import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";

export const PokeDetails = () => {
  //const params = useParams();

  return (<Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height="400"
        image={""}
        alt="photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { }
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};
