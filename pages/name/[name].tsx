import { FC, useState } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { MainLayout } from '../../components/Layouts';
import { Pokemon, PokemonsListResponse } from '../../interfaces';
import { getPokemoninfo, localFavorites } from '../../utils';

interface NamePageProps {
    pokemon: Pokemon;
}

const PokemonByNamePage: FC<NamePageProps> = ({pokemon}) => {

    const [isInFavorite, setIsInFavorite] = useState( localFavorites.existInFavorites( pokemon.id ) );

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorite(!isInFavorite);

        if( isInFavorite ) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {x: 1, y: 0 }
        });

    }

    return (
        <MainLayout title={pokemon.name.toUpperCase()}>

            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} alt={pokemon.name} width="100%" height={200}/>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>

                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between ' }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button color="gradient" ghost={ !isInFavorite } onPress={ onToggleFavorite }>
                                {
                                    !isInFavorite ? 'Add to favorites' : 'Remove from favorites'
                                }
                            </Button>
                        </Card.Header>

                        <Card.Body>

                            <Text size={30}>Sprites</Text>
                            <Container direction='row' display='flex'>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/>
                            </Container>

                        </Card.Body>
                    </Card>

                </Grid>
            </Grid.Container>

        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonsListResponse>(`/pokemon?limit=151`);
    const Names: string[] = data.results.map( pokemon => pokemon.name );

    return {
        paths: Names.map( name => ({ params: { name } }) ),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { name } = params as { name: string };

    const pokemon = await getPokemoninfo( name );

    if( !pokemon ) return { redirect: { destination: '/404', permanent: false } };

    return {
        props: {
            pokemon
        },
        revalidate: 86400,
    }
}

export default PokemonByNamePage;