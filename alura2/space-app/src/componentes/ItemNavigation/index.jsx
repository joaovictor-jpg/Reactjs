import styled from "styled-components"


const ItemListStyle = styled.li `
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 24px;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
`

export const ItemNavigation = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return (
        <ItemListStyle $ativo={ativo}>
            <img src={ativo ? iconeAtivo: iconeInativo} alt="icone" />
            {children}
        </ItemListStyle>
    )
}