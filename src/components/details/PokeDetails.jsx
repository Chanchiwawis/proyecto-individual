import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DataContext } from "../../context/DataContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

export const PokeDetails = () => {
  const params = useParams();
  const { pokemonList, isLoading } = useContext(DataContext);

  const pokemon = pokemonList.find((item) => item.id == params.id);

  console.log(pokemon);

  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={pokemon.sprites.front_default}
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {pokemon.types.map((type) => type.type.name + " ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
