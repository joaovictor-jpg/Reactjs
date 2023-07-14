import styles from "./GameCard.module.css";

import Image from "next/Image";
import Button from "@/components/forms/button/Button";

export default function GameCard({ img_url }) {
  return (
    <div className={styles.gameCard}>
      <Image src={img_url} width={300} height={145} />
      <div className={styles.info}>
        <h3 className={styles.title}>Counter strike: Global Offensive</h3>
        <p className={styles.category}>Ação, Estratégia, Multijogador.</p>
        <div className={styles.pricing}>
          <h4 className={styles.price}>R$99,90</h4>
          <Button children="Adcionar ao carrinho" />
        </div>
      </div>
    </div>
  );
}
