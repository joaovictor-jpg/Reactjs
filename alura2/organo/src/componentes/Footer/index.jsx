import Botao from "../Botao"
import Rede from "../Rede"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <Rede>
                    <img src="./imagens/fb.png" alt="Logo facebook" />
                </Rede>
                <Rede>
                    <img src="./imagens/tw.png" alt="Logo x" />
                </Rede>
                <Rede>
                    <img src="./imagens/ig.png" alt="Logo instagran" />
                </Rede>
            </div>
            <img src="./imagens/logo.png" alt="Logo organo" />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer