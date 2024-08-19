import style from "./Rodape.module.css";
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={style.rodape}>
            <MarcaRegistrada />
            <p>Desenvolvido por João Victor</p>
        </footer>
    );
};