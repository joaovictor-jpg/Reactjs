import styles from './SaleCard.module.css';

import Image from 'next/image';
import Button from "@/components/forms/button/Button";

export default function SaleCard({img_src}) {
    return ( 
        <div className={styles.saleCard}>
            <Image src={img_src} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>
                        -20%
                    </div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$100,00</p>
                        <h4 className={styles.discountPrice}>R$90,89</h4>
                    </div>
                </div>
                <Button children='Adcionar ao carrinho' />
            </div>
        </div>
     );
}