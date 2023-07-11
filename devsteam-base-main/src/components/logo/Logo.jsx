import styles from './Logo.module.css';
import Image from 'next/image';

function Logo() {
    return ( 
        <div className={styles.logo}>
            <Image src="/logo.svg" width={60} height={60}/>
            <h1>DevSteam</h1>
        </div>
     );
}

export default Logo;