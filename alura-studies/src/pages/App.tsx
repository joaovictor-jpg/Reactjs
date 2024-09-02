import Formulario from "../componentes/Formulario";
import Lista from "../componentes/Lista";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
