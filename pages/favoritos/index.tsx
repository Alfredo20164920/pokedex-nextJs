import { MainLayout } from "../../components/Layouts"
import { Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from "../../utils";
import { FavoritesPokemonsList } from "../../components/pokemon";

const Favoritos = () => {


    const [favoritePokemons, setFavoritePokemons] = useState<Number[]>([]);

    useEffect(() => {
        setFavoritePokemons( localFavorites.getFavorites() );
    }, [])
    


    return (
        <MainLayout title="Favoritos">

            {
                favoritePokemons.length === 0
                ? <NoFavorites />
                : <FavoritesPokemonsList pokemons={favoritePokemons} />
            }

            <NoFavorites />
        </MainLayout>
    )
}

export default Favoritos
