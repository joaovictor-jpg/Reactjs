import styled from "styled-components"
import { TitleStyle } from "../Title"
import { Popular } from "./Popular"
import { Tags } from "./Tags"
import { Foto } from "./imagem"

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SectionStyle = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

export const Gallery = ({ Fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <SectionStyle>
                    <TitleStyle>Navegue pela galeria</TitleStyle>
                    <ImagensContainer>
                        {Fotos.map((foto) => <Foto key={foto.id} aoZoomSolicitado={aoFotoSelecionada} foto={foto} aoAlternarFavorito={aoAlternarFavorito} />)}
                    </ImagensContainer>
                </SectionStyle>
                <Popular />
            </GalleryContainer>
        </>
    )
}