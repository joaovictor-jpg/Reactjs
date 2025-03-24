import styled from "styled-components"

const FooterStyle = styled.footer`
    max-width: 100%;
    height: 80px;
    margin-top: 50px;
    padding: 0 23px;
    background-color: #04244F;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        display: flex;
        gap: 24px;
    }
    p {
        font-family: monospace;
        font-size: 15px;
        font-weight: 700;
    }
`

export const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <img src="./imagens/sociais/facebook.svg" alt="contato facebook" />
                <img src="./imagens/sociais/instagram.svg" alt="contato facebook" />
                <img src="./imagens/sociais/twitter.svg" alt="contato facebook" />
            </div>
            <p>Desenvolvidor por Jota</p>
        </FooterStyle>
    )
}