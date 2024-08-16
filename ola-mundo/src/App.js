import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMin />

function App() {
  return (
    pagina
  );
}

export default App;
