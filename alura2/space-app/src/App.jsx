import styled from "styled-components"
import { BarraLateral } from "./componentes/BarraLateral"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import { Banner } from "./componentes/Banner"
import { Gallery } from "./componentes/Gallery"
import Fotos from './fotos.json'
import { useState } from "react"
import { ModalZoom } from "./componentes/ModalZoom"
import { Footer } from "./componentes/Footer"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  margin-top: 64px;
  gap: 24px;
`

const ContentGallery = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(Fotos)

  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  const aoFotoSelecionado = (foto) => {
    setFotoSelecionada(foto)
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <ContentGallery>
            <Banner />
            <Gallery aoFotoSelecionada={aoFotoSelecionado} Fotos={fotosDaGaleria} aoAlternarFavorito={aoAlternarFavorito} />
          </ContentGallery>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito}/>
      <Footer />
    </FundoGradiente>
  )
}

export default App
