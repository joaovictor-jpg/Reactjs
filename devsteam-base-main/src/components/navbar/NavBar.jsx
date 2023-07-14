import styles from './NavBar.module.css'
import { BsCart4 } from "react-icons/bs";
import Logo from '@/components/logo/Logo.jsx'
import Input from "@/components/forms/input/Input.jsx";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Logo />
        <Input placeholder="Buscar" />
        <BsCart4 size={40} />
    </nav>
  );
}
