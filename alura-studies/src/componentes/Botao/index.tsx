import React from "react";
import styles from './Botao.module.scss';

export default class Botao extends React.Component<{ children: string, type?: "submit" | "reset" | "button", onClick?: () => void }> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button type={type} className={styles.botao} onClick={onClick}>
                {this.props.children}
            </button>
        );
    };
};