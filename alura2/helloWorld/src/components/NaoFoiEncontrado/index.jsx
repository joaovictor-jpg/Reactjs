import styles from './NaoFoiEncontrado.module.css';
import circulo_colorido from '../../assets/circulo_colorido.png'
import { Botao } from '../Botao'
import { useNavigate } from 'react-router-dom';

export const NaoFoiEncontrado = () => {
    const navigation = useNavigate()
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <div className={styles.botaoContainer} onClick={() => navigation(-1)}>
                    <Botao>Voltar</Botao>
                </div>
            </div>
            <img className={styles.imagemCachorro} src={circulo_colorido} alt="Capa" />
            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}