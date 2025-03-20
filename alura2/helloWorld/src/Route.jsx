import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./paginas/About"
import Home from "./paginas/Home"
import { Menu } from "./components/Menu"

function AppRoute() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<About />} />
        <Route path="*" element={<div>Página não encontrada!</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
