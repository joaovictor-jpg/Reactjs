import styles from "./NavBar.module.css";
import CardButton from '@/components/forms/cardButton/CardButton.jsx';
import Logo from "@/components/logo/Logo.jsx";
import Input from "@/components/forms/input/Input.jsx";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <div className={styles.search}>
        <Input fullWidth placeholder="Buscar" />
      </div>
      <CardButton />
    </nav>
  );
}
