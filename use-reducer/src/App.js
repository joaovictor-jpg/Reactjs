import { useReducer, useState } from 'react';
import './App.css';
import reducer, { ADICIONANDO_FRASE, EXCLUIR_FRASE } from './reducer';

function App() {

  const [frase, setFrase] = useState('');
  //const [frases, setFrases] = useState([]);
  const [frases, dispatch] = useReducer(reducer, [])
  function salvarFrase(evento) {
    evento.preventDefault();

    //setFrases([...frases, frase]);

    dispatch({
      tipo: ADICIONANDO_FRASE,
      frase
    });
  }

  function excluir(fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div className='App'>
      <form onSubmit={salvarFrase}>
        <textarea
          required
          value={frase}
          onChange={evento => setFrase(evento.target.value)}
          placeholder='digite sua frase:'
        />
        <br />
        <button>Salvar frase</button>
      </form>
      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => { excluir(fraseAtual) }}>Excluir</button></p>)}
    </div>
  );
}

export default App;
