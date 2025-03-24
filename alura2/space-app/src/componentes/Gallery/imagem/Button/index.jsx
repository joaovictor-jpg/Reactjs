import styled from "styled-components"

const ButtonStyle = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`


export const Button = ({ src, aoZoomSolicitado, foto, aoAlternarFavorito, zoom }) => {

    function acao(foto) {
        if (zoom) {
            aoZoomSolicitado(foto)
            return;
        }
        aoAlternarFavorito(foto)
    }

    return (
        <ButtonStyle onClick={(() => acao(foto))} >
            <img src={src} alt="icons" />
        </ButtonStyle>
    )
}