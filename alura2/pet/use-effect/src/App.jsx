import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [pets, setPets] = useState([])
  const [busca, setBuscar] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/pets')
      .then(result => result.json())
      .then(dados => setPets(dados))
  }, [])

  useEffect(() => {

    if (busca && busca.length > 3) {
      fetch(`http://localhost:8080/pets/${busca}`)
        .then(result => {
          if (!result.ok) {
            throw new Error('Pet não encontrado');
          }
          return result.json();
        })
        .then(dados => setPets([dados]))
        .catch(error => {
          console.error(error);
          setPets([]);
        });
    }

  }, [busca])

  return (
    <>
      <h1>Bem-vindo aos doguinhos!</h1>
      <h4>Confira abaixo uma lista de raças dos doguinhos</h4>
      <input type="text" placeholder='Digite a raça do pet' onChange={event => setBuscar(event.target.value)} />
      <ul>
        {pets.length > 0 ? (
          pets.map(pet => <li key={pet.nome}>{pet.nome}</li>)
        ) : (
          <li>Nenhum pet encontrado.</li>
        )}
      </ul>
    </>
  )
}

export default App
