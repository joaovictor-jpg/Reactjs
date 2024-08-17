import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    return (
        <nav className={styles.link}>
            <NavLink to={to} className={({isActive}) => `${isActive && styles.linkDestacado}`} end>
                {children}
            </NavLink>
        </nav>
    );
};
