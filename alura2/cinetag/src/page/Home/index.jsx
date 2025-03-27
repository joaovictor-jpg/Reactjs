import { Banner } from "@/components/Banner"
import { Titlo } from "@/components/Titlo"
import videos from "../../../db.json"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"
import { StyledMain } from "@/components/Main"
import { FcDislike } from "react-icons/fc";
import styled from "styled-components"

const IconeDinamico = styled(FcDislike)`
    font-size: 24px;
    padding-left: 27px;
`

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
                            <IconeDinamico />
                        </Card>
                    ))}
                </StyledMain>
            </Container>
        </>
    )
}