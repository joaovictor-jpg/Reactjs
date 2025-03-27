import styled from "styled-components"

const StyledSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const NotFound = () => {
    return (
        <StyledSection>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </StyledSection>
    )
}