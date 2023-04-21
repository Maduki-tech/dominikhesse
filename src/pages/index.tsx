import { type NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '~/Components/AboutMe'
import Banner from '~/Components/Banner'
import Navbar from '~/Components/Navbar'
import Services from '~/Components/Services'
import SocialMedia from '~/Components/SocialMedia'
import Wahl from '~/Components/Wahl'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nachhilfe Hesse</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="">

            <Banner />
            <SocialMedia />
            </main>
            <AboutMe />
            <Services />
            <Wahl/>
        </>
    )
}

export default Home
