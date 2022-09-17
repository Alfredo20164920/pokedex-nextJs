import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, Grid } from '@nextui-org/react'


export const FavoriteCardPokemon = ({pokemonId}) => {

    const router = useRouter()

    const onFavoriteClick = () => {
        router.push(`/pokemon/${pokemonId}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} lg={2} key={pokemonId}>
            <Card isHoverable isPressable onPress={onFavoriteClick} css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
