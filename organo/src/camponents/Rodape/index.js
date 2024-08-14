import Rede from '../Redes';
import './Rodape.css';

const Rodape = () => {

    const imagens = [
        {
            src: "/imagens/tw.png",
            alt: "logo Twitter"
        },
        {
            src: "/imagens/fb.png",
            alt: "logo Facebook"
        },
        {
            src: "/imagens/ig.png",
            alt: "logo Instagran"
        }
    ]

    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    );
}

export default Rodape;

/*<div>
                {
                    imagens.map(imagem => <Rede imagem={imagem.src} descricao={imagem.alt} />)
                }
            </div>
            <img src="/imagens/logo.png" alt="logo organo" />
            <h3>Desenvolvido por Alura.</h3>
            <footer className="footer">
</footer >*/