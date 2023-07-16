import styles from "./SaleCard.module.css";

import Image from "next/image";
import Button from "@/components/forms/button/Button";

export default function SaleCard({ img, discount, fullPrice, discountPrice }) {
  return (
    <div className={styles.saleCard}>
      <Image src={`/products/${img}`} alt={`Produto ${img}`} width={250} height={300} />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>-{discount}%</div>
          <div className={styles.price}>
            <p className={styles.fullPrice}>R${fullPrice}</p>
            <h4 className={styles.discountPrice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button fullWidth="fullWidth" children="Adcionar ao carrinho" />
      </div>
    </div>
  );
}

SaleCard.defaultProps = {
  img: 'league-of-legends.jpg',
  discount: 50,
  fullPrice: '199,90',
  discountPrice: '57,90',
}
