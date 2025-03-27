import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "./Logo-cinetag-branco.png"
import { LinkHeader } from "./LinkHeader"

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: var(--black);
`


export const Header = () => {
    return (
        <HeaderStyle>
            <Link to={'/'}>
                <img src={logo} alt="Logo" />
            </Link>
            <nav>
                <LinkHeader url='./'>
                    Home
                </LinkHeader>
                <LinkHeader url='/Favorites'>
                    Favoritos
                </LinkHeader>
            </nav>
        </HeaderStyle>
    )
}