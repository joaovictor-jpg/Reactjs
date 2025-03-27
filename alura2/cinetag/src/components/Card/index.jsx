import styled from "styled-components"

const StiledDiv = styled.div`
    padding: 0 0 1em 0;
    margin-top: .5rem;
    width: 282px;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .capa {
        width: 100%;
    }
    
    h2 .favoritar {
        padding: 0 1em;
    }

    .favoritar {
        width: 25px;
    }
`


export const Card = ({ titulo, capa, children }) => {
    return (
        <StiledDiv>
            <img src={capa} alt={titulo} className="capa" />
            <h2>{titulo}</h2>
            {children}
        </StiledDiv>
    )
}