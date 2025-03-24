import styled from 'styled-components'
import { Tag } from './Tag'
import tags from './tags.json'

const NavStyle = styled.nav`
    display: flex;
    gap: 24px;
    margin-top: 60px;
    h3 {
        font-size: 24px;
        color: #fff;
        margin-right: 60px;
    }
`

export const Tags = () => {
    return (
        <NavStyle>
            <h3>Busque por tags:</h3>
            {tags.map(tag => (<Tag key={tag.id}>{tag.titulo}</Tag>))}
        </NavStyle>
    )
}