import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Footer from './componentes/Footer'
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const [times, setTimes] = useState([
    {
      id_time: uuidv4(),
      nome: "Programação",
      corPrimaria: '#57C278',
      corSecundaria: '#a6f6af',
    },
    {
      id_time: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#66b6ab',
    },
    {
      id_time: uuidv4(),
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#a8c99e',
    },
    {
      id_time: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#ff8a84',
    },
    {
      id_time: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#f87887',
    },
    {
      id_time: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#e2aa87',
    },
    {
      id_time: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#ffab66',
    }
  ])

  function aoDeletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaboradore => colaboradore.id !== id ? colaboradore : ""))
  }

  function aoMudarCorPrimariaDoTime(id, cor) {
    setTimes(times.map(time => {
      if (time.id_time === id) {
        time.corPrimaria = cor;
        time.corSecundaria = hexToRgba(cor, 0.6)
      }
      return time;
    }))
  }

  function aoCriarNovoTime(novoTime) {
    setTimes([...times, { ...novoTime }])
  }

  function aoFavoritar(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favoritar = !colaborador.favoritar;

      return colaborador
    }))
  }

  return (
    <>
      <Banner />
      <Formulario aoNovoTime={aoCriarNovoTime} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times.map(time => time.nome)} />
      {times.map(time => <Time
        key={time.id_time}
        id={time.id_time}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        aoDeletar={aoDeletarColaborador}
        aoMudarCor={aoMudarCorPrimariaDoTime}
        aoFavoritar={aoFavoritar}
      />)}
      <Footer />
    </>
  )
}

export default App
