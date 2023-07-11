import styles from './NavBar.module.css'
import { BsCart4 } from "react-icons/bs";
import Logo from '@/components/logo/Logo.jsx'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Logo />
        <input />
        <BsCart4 size={40} />
    </nav>
  );
}
