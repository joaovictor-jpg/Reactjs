import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    h2 {
        color: var(--white);
        font-size: 18px;
        font-weight: 400;
    }
`

export const Footer = () => {
    return(
        <StyledFooter>
            <h2>Desenvolvido Por João</h2>
        </StyledFooter>
    )
}