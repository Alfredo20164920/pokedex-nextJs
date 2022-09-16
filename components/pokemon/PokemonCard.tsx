import React, { FC } from "react";
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from "../../interfaces";


interface PokemonCardProps {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({pokemon: {id, name, url, img}}) => {


	return (
        <>
            <Grid xs={ 6 } md={4} xl={2} key={id} >
				<Card isHoverable isPressable>
					<Card.Body >
						<Card.Image src={img} width='100%' height={140} />
                    </Card.Body>

					<Card.Footer>
						<Row justify='space-between'>
							<Text transform='capitalize'>{name}</Text> 
                            <Text>{id}</Text>
						</Row>
					</Card.Footer>

				</Card>
			</Grid>
        </>
    );
};

