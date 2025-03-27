import styled from "styled-components"

const StyledSection = styled.section`
    margin: 2em 20em;
    text-align: center;
`

export const Container = ({ children }) => {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    )
}