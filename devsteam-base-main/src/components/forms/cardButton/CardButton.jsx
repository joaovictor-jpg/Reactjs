import styles from './CardButton.module.css'
import { BsCart4 } from "react-icons/bs";
import CardMenu from '@/components/cardMenu/CardMenu.jsx'
import { useState } from "react";

export default function CardButton() {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <BsCart4 className={styles.icon} size={40} onClick={() => {setOpen(!open)}} />
            {
                open && <CardMenu />
            }
        </div>
    );
}