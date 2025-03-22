import styled from "styled-components"

const ListStyle = styled.ul `
    width: 212px;
    padding: 0;
    margin: 0;
    list-style: none;
    color: #fff;
`


export const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListStyle>
                    <li>Ínicio</li>
                    <li>Ínicio</li>
                </ListStyle>
            </nav>
        </aside>
    )
}