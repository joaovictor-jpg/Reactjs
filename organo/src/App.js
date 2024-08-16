import { useState } from 'react';
import Banner from './camponents/Banner/Banner';
import Formulario from './camponents/Formulario';
import Time from './camponents/Time';
import Rodape from './camponents/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      time: 'Progamação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      time: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      time: 'Data Science',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      time: 'DevOps',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      time: 'UX e Design',
      cor: '#FAE9F5',
    },
    {
      id: uuidv4(),
      time: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      time: 'Inovação e Gestão',
      cor: '#FFEEDF',
    },
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function DeleterColaborador(id) {
    setColaboradores(colaboradores.filter(colaboradores => colaboradores.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {  
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.time)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(value => <Time
        key={value.id}
        id={value.id}
        time={value.time}
        mudarCor={mudarCorDoTime}
        cor={value.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === value.time)}
        aoDeletar={DeleterColaborador}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
