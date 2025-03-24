import styled from "styled-components"
import { ItemNavigation } from "../ItemNavigation"

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
                    <ItemNavigation iconeAtivo="./imagens/icones/home-ativo.png" iconeInativo="./icones/home-inativo.png" ativo={true} >
                        Início
                    </ItemNavigation>
                    <ItemNavigation iconeAtivo="./imagens/icones/mais-vistas-ativo.png" iconeInativo="./imagens/icones/mais-vistas-inativo.png" >
                        Mais Vistas
                    </ItemNavigation>
                    <ItemNavigation iconeAtivo="./imagens/icones/mais-curtidas-ativo.png" iconeInativo="./imagens/icones/mais-curtidas-inativo.png" >
                        Mais curtidas
                    </ItemNavigation>
                    <ItemNavigation iconeAtivo="./imagens/icones/novas-ativo.png" iconeInativo="./imagens/icones/novas-inativo.png" >
                        Novas
                    </ItemNavigation>
                    <ItemNavigation iconeAtivo="./imagens/icones/surpreenda-me-ativo.png" iconeInativo="./imagens/icones/surpreenda-me-inativo.png" >
                        Surpreenda-se
                    </ItemNavigation>
                </ListStyle>
            </nav>
        </aside>
    )
}