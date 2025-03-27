import { Banner } from "@/components/Banner"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"
import { StyledMain } from "@/components/Main"
import { Titlo } from "@/components/Titlo"
import { useFavoritesContext } from "@/components/Hooks/Favorites"

export const Favorite = () => {
    const { favorites } = useFavoritesContext()
    return (
        <>
            <Banner img="favoritos" />
            <Container>
                <Titlo>
                    <h1>Meus Favoritos</h1>
                </Titlo>
                <StyledMain>
                    {favorites.map((video) => (
                        <Card {...video} key={video.id} />
                    ))}
                </StyledMain>
            </Container>
        </>
    )
}