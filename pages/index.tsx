import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hola</h1>
      <Button color="gradient" auto>Hola mundo</Button>
    </>
  )
}

export default Home
