import styled from "styled-components";

export const TitleStyle = styled.h2`
    font-size: 32px;
    color: #7B78E5;
    text-align: ${ props => props.$alignment ? props.$alignment : 'left' };
`