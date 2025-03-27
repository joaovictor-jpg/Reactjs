import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
    color: var(--white);
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
`

export const LinkHeader = ({url, children}) => {
    return (
        <StyledLink to={url}>
            {children}
        </StyledLink>
    )
}