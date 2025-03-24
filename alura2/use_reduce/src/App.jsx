import { useReducer, useState } from 'react'
import './App.css'
import { ADICIONAR_FRASE, EXCLUIR_FRASE, Reduce } from './Reduce'

function App() {

  const [frase, setFrase] = useState('')
  const [frases, dispatch] = useReducer(Reduce, [])

  const salvarFrase = (e) => {
    e.preventDefault()
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase
    })
  }

  function excluir(fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div>
      <form onSubmit={salvarFrase}>
        <textarea value={frase} placeholder='Digite sua frase...' required onChange={event => { setFrase(event.target.value) }} />
        <br />
        <button>Salvar</button>
      </form>

      {frases.map((fraseAtual, i) => <p key={i}>{fraseAtual}- <button onClick={() => excluir(fraseAtual)}>Excluir</button></p>)}
    </div>
  )
}

export default App
