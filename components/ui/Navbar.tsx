import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{ 
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray200.value,
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Pokemon Logo"
                width={ 50 }
                height={ 50 }
            />
            <NextLink href={'/'}>
                <Link>
                    <Text color='white'h2>P</Text>
                    <Text color='white'>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }}/>
        
            <NextLink href={'/favoritos'}>
                <Link>
                    <Text color='white' >Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
}
