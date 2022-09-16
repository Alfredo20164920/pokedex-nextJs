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
			<MainLayout title='Listado de pokemons'>

				<PokemonList pokemons={ pokemons }/>

			</MainLayout>

		</>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {

	const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151')

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
