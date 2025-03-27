import { Banner } from "@/components/Banner"
import { Titlo } from "@/components/Titlo"
import videos from "../../../db.json"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"
import { StyledMain } from "@/components/Main"
import { FcLike } from "react-icons/fc";
import styled from "styled-components"

const IconeDinamico = styled(FcLike)`
    font-size: 24px;
    padding-left: 27px;
`

export const Favorite = () => {
    return (
        <>
            <Banner img="favoritos" />
            <Container>
                <Titlo>
                    <h1>Meus Favoritos</h1>
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