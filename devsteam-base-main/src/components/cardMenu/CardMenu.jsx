import styles from "./CardMenu.module.css";

import CardOption from "@/components/cardOption/CardOption.jsx";
import Button from "@/components/forms/button/Button";

export default function CardMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        <CardOption
          img={"league-of-legends.jpg"}
          name={"league of legends"}
          price={"99,90"}
        />
        <CardOption img={"dota-2.jpg"} name={"dota 2"} price={"99,90"} />
        <CardOption img={"valorant.jpg"} name={"valorant"} price={"99,90"} />
      </div>
      <hr />
      <div className={styles.footer}>
        <h4>Total</h4>
        <p>R$297,70</p>
      </div>
      <Button fullWidth="fullWidth" children="Finalizar compra" />
    </div>
  );
}
