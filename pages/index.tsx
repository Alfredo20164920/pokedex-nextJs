import type { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react'

import { pokeApi } from '../api';
import { MainLayout } from '../components/Layouts'

import { SmallPokemon, PokemonsListResponse } from '../interfaces/pokemon-list';
import { PokemonCard, PokemonList } from '../components/pokemon';


interface HomeProps {
	pokemons: SmallPokemon[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
	return (
		<>
			<MainLayout title={'Hola mundo'}>

				<PokemonList pokemons={ pokemons }/>

			</MainLayout>

		</>
	)
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {

	const {data} = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151')

	// const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${}.svg`

	const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
		...pokemon,
		id: index + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
	}))

	return {
		props: {
			pokemons,
			
		}
	}
}

export default Home
