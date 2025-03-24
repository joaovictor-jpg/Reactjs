import styled from "styled-components"
import { Foto } from "../Gallery/imagem"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogStyle = styled.dialog`
    position: absolute;
    top: 294px;
    width: 1156px;
    border: none;
    background: transparent;
`

const CloseStyle = styled.button`
    width: auto;
    position: absolute;
    top: 25px;
    right: 150px;
    border: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
`

export const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogStyle open={!!foto} onClose={aoFechar}>
                    <Foto foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                    <form method="dialog">
                        <CloseStyle formMethod="dialog">x</CloseStyle>
                    </form>
                </DialogStyle>
            </>}
        </>
    )
}