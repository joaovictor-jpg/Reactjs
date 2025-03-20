import styles from './Footer.module.css'
import { FaRegRegistered } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <FaRegRegistered />
            <p>João Victor</p>
        </footer>
    )
}