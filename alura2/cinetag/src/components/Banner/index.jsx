import styled from "styled-components"

const StyledDiv = styled.div`
    width: 100%;
    height: 347px;
    background-image: url(${props => `./imagem/banner-${props.$img}.png`});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Banner = ({ img }) => {
    return(
        <StyledDiv $img={img} />
    )
}