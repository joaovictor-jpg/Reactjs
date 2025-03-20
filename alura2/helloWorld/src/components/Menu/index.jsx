import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import { MenuLink } from '../MenuLink';

export const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/aboute">
                    Sobre
                </MenuLink>
            </nav>
        </header>
    )
}