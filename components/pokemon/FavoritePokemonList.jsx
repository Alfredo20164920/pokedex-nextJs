import { Card, Grid } from "@nextui-org/react"
import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoritePokemonCard";

export const FavoritesPokemonsList = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
            {
                pokemons.map( (id) => (
                    <FavoriteCardPokemon key={id} pokemonId={ id } />
                ))
            }
        </Grid.Container>
    )
}
