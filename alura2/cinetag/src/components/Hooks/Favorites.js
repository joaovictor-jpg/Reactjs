import { useContext } from "react"
import { FavoritesContext } from "../context/FavoriteContext"

export const useFavoritesContext = () => {
    const {favorites, setFavorites} = useContext(FavoritesContext)

    function addFavorite(novoFavorito) {
        const favoritoRepetido = favorites.some(item => item.id === novoFavorito.id)
        
        let novaLista = [...favorites];
        
        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorites(novaLista);
        }
        
        novaLista = favorites.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorites(novaLista);
    }

    return {
        favorites,
        addFavorite
    }

}