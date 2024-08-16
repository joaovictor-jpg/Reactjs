import { useState } from 'react';
import Banner from './camponents/Banner/Banner';
import Formulario from './camponents/Formulario';
import Time from './camponents/Time';
import Rodape from './camponents/Rodape';


function App() {

  const [times, setTimes] = useState([
    {
      time: 'Progamação',
      cor: '#D9F7E9',
    },
    {
      time: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      time: 'Data Science',
      cor: '#F0F8E2',
    },
    {
      time: 'DevOps',
      cor: '#FDE7E8',
    },
    {
      time: 'UX e Design',
      cor: '#FAE9F5',
    },
    {
      time: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      time: 'Inovação e Gestão',
      cor: '#FFEEDF',
    },
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function DeleterColaborador() {
    console.log('Deletando colaborador');
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {  
      if (time.time === nome) {
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
        key={value.time}
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
