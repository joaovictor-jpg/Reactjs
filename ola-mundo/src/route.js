import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrada";

function AppRoute() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMin />} />
        </Route>
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoute;
