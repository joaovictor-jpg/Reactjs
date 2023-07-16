import Head from "next/head";

import styles from "@/styles/index.module.css";

import { useState } from "react";

import NavBar from "@/components/NavBar/NavBar.jsx";
import Subtitle from "@/components/tipography/subtitle/Subtitle.jsx";
import Container from "@/components/container/Container.jsx";
import SaleCard from "@/components/cards/saleCard/SaleCard.jsx";
import GameCard from "@/components/cards/gameCard/GameCard.jsx";

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };

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
        <NavBar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle subtitle="Promoção" />
            <div className={styles.saleContainer}>
              <SaleCard
                img={"league-of-legends.jpg"}
                discount={30}
                fullPrice="100,99"
                discountPrice="99,99"
                onAdd={() =>
                  handleAddProduct({
                    name: "league of legends",
                    price: 99.9,
                    image: "league-of-legends.jpg",
                  })
                }
              />
              <SaleCard
                img={"dota-2.jpg"}
                discount={40}
                fullPrice="80,99"
                discountPrice="109,90"
                onAdd={() =>
                  handleAddProduct({
                    name: "dota 2",
                    price: 80.99,
                    image: "dota-2.jpg",
                  })
                }
              />
              <SaleCard
                img={"valorant.jpg"}
                discount={50}
                fullPrice="199,99"
                discountPrice="209,90"
                onAdd={() =>
                  handleAddProduct({
                    name: "valoranr",
                    price: 209.9,
                    image: "valorant.jpg",
                  })
                }
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle subtitle="Outro jogo" />
            <div className={styles.gameContainer}>
              <GameCard
                img_url="/products/counter-strike.jpg"
                onAdd={() =>
                  handleAddProduct({
                    name: "Counter Strike",
                    price: 99.9,
                    image: "counter-strike.jpg",
                  })
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
