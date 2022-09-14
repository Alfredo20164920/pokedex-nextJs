import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { MainLayout } from '../components/Layouts'

const Home: NextPage = () => {
	return (
		<>
			<MainLayout title={'Hola mundo'}>

				<h1>Hola</h1>
				<Button color="gradient" auto>Hola mundo</Button>

			</MainLayout>

		</>
	)
}

export default Home
