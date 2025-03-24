import { styled } from "styled-components"
import { Input } from "../Input"

const HeaderStyles = styled.header`
    padding-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = () => {
    return (
        <HeaderStyles>
            <img src="/imagens/logo.png" alt="Logo" />
            <Input />
        </HeaderStyles>
    )
}

export default Header