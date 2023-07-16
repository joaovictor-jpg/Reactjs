import styles from "./CardMenu.module.css";

import CardOption from "@/components/cardOption/CardOption.jsx";
import Button from "@/components/forms/button/Button";

export default function CardMenu({ cart, onRemove }) {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>}
        {cart.length > 0 &&
          cart.map((cartInfo, pos) => (
            <CardOption
              img={cartInfo.image}
              name={cartInfo.name}
              price={cartInfo.price}
              onRemove={() => onRemove(pos)}
              key={`cart-info-${pos}`}
            />
          ))}
      </div>
      <hr />
      <div className={styles.footer}>
        <h4>Total</h4>
        <p>
          R${cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}
        </p>
      </div>
      <Button fullWidth="fullWidth" children="Finalizar compra" />
    </div>
  );
}
