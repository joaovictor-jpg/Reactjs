import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Header"
import { BarraLateral } from "./componentes/BarraLateral"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Header />
      <BarraLateral />
    </FundoGradiente>
  )
}

export default App
