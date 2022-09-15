import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
	children: React.ReactNode;
    title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> { title || 'Pokemon app' } </title>
                <meta name="author" content="Alfredo Paz Zamora (Charibu)" />
                <meta name="description" content={`Pokemon App ${ title }`} />
                <meta name="keywords" content={`pokemon, pokedex, ${ title }`} />
            </Head>

            {/* Navbar */}
            <Navbar />

            <main style={{ 
                padding: '0px 20px',
                
            }}>
                {/* Content */}
                { children }
            </main>

            {/* Footer */}
        </>
    )
}