import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

interface MainLayoutProps {
    children?: React.ReactNode
    title?: string;
}

const origin = (typeof window === 'undefined') ? '': window.location.origin;

export const MainLayout: FC<MainLayoutProps> = ({children, title }) => {
    return (
        <>
            <Head> 
                <title> { title || "Poke Api" } </title>
                <meta name="author" content="Alfredo Paz Zamora (Charibu)" />
                <meta name="description" content={`Pokemon App ${ title }`} />
                <meta name="keywords" content={`pokemon, pokedex, ${ title }`} />

                <meta property="og:title" content={`Información sobre ${title}`}/>
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{ 
                padding: '0px 20px',
                
            }}>
                { children }
            </main>

        </>
    )
}
