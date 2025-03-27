import styled from "styled-components"

const StyledDiv = styled.div`
    h1 {
        text-align: center;
        font-size: 36px;
        font-weight: 500;
    }
`

export const Titlo = ({children}) => {
    return(
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}