import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Footer from './componentes/Footer'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const times = [
    {
      nome: "Programação",
      corPrimaria: '#57C278',
      corSecundaria: '#a6f6af',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#66b6ab',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#a8c99e',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#ff8a84',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#f87887',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#e2aa87',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#ffab66',
    }
  ]

  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times.map(time => time.nome)} />
      {times.map(time => <Time 
                              key={time.nome}
                              nome={time.nome}
                              corPrimaria={time.corPrimaria}
                              corSecundaria={time.corSecundaria}
                              colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
                          />)}
      <Footer />
    </>
  )
}

export default App
