import Head from "next/head";

import styles from '@/styles/index.module.css'

import NavBar from "@/components/NavBar/NavBar.jsx";
import Subtitle from "@/components/tipography/subtitle/Subtitle.jsx";
import Container from "@/components/container/Container.jsx";
import SaleCard from "@/components/cards/saleCard/SaleCard.jsx";
import GameCard from "@/components/cards/gameCard/GameCard.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <Container>
          <div className={styles.session}>
            <Subtitle subtitle="Promoção" />
            <div className={styles.saleContainer}>
              <SaleCard img_src='/products/league-of-legends.jpg' />
              <SaleCard img_src='/products/dota-2.jpg' />
              <SaleCard img_src='/products/valorant.jpg' />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle subtitle="Outro jogo" />
            <div>
              <GameCard img_url='/products/counter-strike.jpg' />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
