import styled from "styled-components"
import { FcDislike, FcLike } from "react-icons/fc";
import { useFavoritesContext } from "../Hooks/Favorites";
import { Link } from "react-router-dom";

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
    .icon {
        font-size: 24px;
        padding-left: 27px;
        cursor: pointer;
    }
`

const StileLink = styled(Link)`
    text-decoration: none;
    color: var(--preto);
    text-align: left;
`

export const Card = ({ id, titulo, capa }) => {

    const { favorites, addFavorite } = useFavoritesContext()

    const isFavorite = favorites.some(fav => fav.id === id)

    function addFavorites() {
        addFavorite({ id, titulo, capa })
    }

    return (
        <StiledDiv>
            <StileLink to={`/${id}`}>
                <img src={capa} alt={titulo} className="capa" />
                <h2>{titulo}</h2>
            </StileLink>
            {!isFavorite ? <FcDislike className="icon" onClick={addFavorites} /> : <FcLike className="icon" onClick={addFavorites} />}
        </StiledDiv>
    )
}