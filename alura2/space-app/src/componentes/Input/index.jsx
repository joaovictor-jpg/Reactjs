import styled from "styled-components";
import search from '../../assets/search.png'

const DivStyles = styled.div`
    position: relative;
    width: 600px;
    height: 56px;
    border-radius: 10px;
    border: solid 2px;
    border-color: #C98CF1;
    input {
        width: 100%;
        padding-left: 10px;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        box-sizing: border-box;
        font-size: 20px;
        font-weight: 400;
        line-height: 20px;
        color: #D9D9D9;
        
    }
    img {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`

export const Input = () => {
    return (
        <DivStyles>
            <input type="text" placeholder="O que você procura?" />
            <img src={search} alt="lupa para pesquisar" />
        </DivStyles>
    )
}