import styles from './CardOption.module.css'

import Image from "next/image";

export default function ({img, name, price}) {
    return ( 
        <div className={styles.card}>
            <Image src={`/products/${img}`} alt={`Produto ${img}`} width={62} height={74} />
            <div className={styles.info}>
                <h4>{name}</h4>
                <p className={styles.price}>R${price}</p>
                <p className={styles.btn}>Remove</p>
            </div>
        </div>
     );
}