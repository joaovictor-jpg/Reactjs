import { useState } from "react";
import Cronometro from "../componentes/Cronometro";
import Formulario from "../componentes/Formulario";
import Lista from "../componentes/Lista";
import styles from './App.module.scss';
import ITarefa from "../types/ITarefa";

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionado: ITarefa) {
    setSelecionado(tarefaSelecionado);
    setTarefas(tarefasAntigas => tarefasAntigas.map(
      tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionado.id ? true : false
      })
    ))
  };

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAntigas => tarefasAntigas.map(
        tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              completado: true
            }
          }
          return tarefa;
        }
      ))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecioneTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizada={finalizarTarefa}
      />
    </div>
  );
}

export default App;
