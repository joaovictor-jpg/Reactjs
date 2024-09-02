import React from "react";
import Botao from "../Botao";
import styles from './Formulario.module.scss';

export default class Formulario extends React.Component {
    render() {
        return (
            <form className={styles.novaTarefa}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao />
            </form>
        );
    }
};