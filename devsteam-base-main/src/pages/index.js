import Head from "next/head";

import NavBar from "@/components/NavBar/NavBar.jsx";
import Subtitle from "@/components/tipography/subtitle/Subtitle.jsx";
import Container from "@/components/container/Container.jsx";
import SaleCard from "@/components/cards/SaleCard/SaleCard.jsx";

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
          <div>
            <Subtitle subtitle="Promoção" />
            <div>
              <SaleCard />
            </div>
          </div>
          <div>
            <Subtitle subtitle="Outro jogo" />
            <div>
              <SaleCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
