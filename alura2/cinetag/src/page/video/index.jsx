import { Banner } from "@/components/Banner"
import { Container } from "@/components/Container"
import { Titlo } from "@/components/Titlo"
import { useParams } from "react-router-dom"
import videos from "../../../db.json"
import { NotFound } from "../NotFound"

export const Video = () => {
    const parametros = useParams();
    const video = videos.find(video => (
        video.id === Number(parametros.id)
    ))
    if (!video) {
        return <NotFound />
    }
    return (
        <>
            <Banner img="player" />
            <Container>
                <Titlo>
                    <h1>Player</h1>
                </Titlo>
                <iframe width="560" height="315" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Container>
        </>
    )
}