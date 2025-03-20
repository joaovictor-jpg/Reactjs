import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./paginas/About"
import Home from "./paginas/Home"
import { Menu } from "./components/Menu"
import { Footer } from "./components/Footer"
import { DefaultPage } from "./paginas/DefaultPage"
import { Post } from "./paginas/Post"
import { NaoFoiEncontrado } from "./components/NaoFoiEncontrado"

function AppRoute() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="aboute" element={<About />} />
        </Route>
        <Route path="/posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoFoiEncontrado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoute
