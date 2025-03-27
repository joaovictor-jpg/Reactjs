import { Banner } from "@/components/Banner"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"
import { StyledMain } from "@/components/Main"
import { Titlo } from "@/components/Titlo"
import videos from "../../../db.json"

export const Home = () => {

    return (
        <>
            <Banner img="home" />
            <Container>
                <Titlo>
                    <h1>Um lugar para guardar seus vídeos e filmes!</h1>
                </Titlo>
                <StyledMain>
                    {videos.map((video) => (
                        <Card {...video} key={video.id}>
                        </Card>
                    ))}
                </StyledMain>
            </Container>
        </>
    )
}