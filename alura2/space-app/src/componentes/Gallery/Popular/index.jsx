import styled from "styled-components"
import { TitleStyle } from "../../Title"

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgStyle = styled.img`
    width: 212;
    border-radius: 10px;
    margin-bottom: 24px;
`

const ButtonStyle = styled.button`
    width: 208px;
    background-color: transparent;
    border: 2px solid #C98CF1;
    padding: 14px 0px;
    border-radius: 10px;
    color: #fff;
    font-family: 'GandhiSansBold';
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`

export const Popular = () => {
    return (
        <DivStyle>
            <TitleStyle alignment='center'>Populares</TitleStyle>
            <ImgStyle src='./imagens/populares/foto-1.png' />
            <ImgStyle src='./imagens/populares/foto-2.png' />
            <ImgStyle src='./imagens/populares/foto-3.png' />
            <ImgStyle src='./imagens/populares/foto-4.png' />
            <ImgStyle src='./imagens/populares/foto-5.png' />
            <ButtonStyle>Ver mais</ButtonStyle>
        </DivStyle>
    )
}