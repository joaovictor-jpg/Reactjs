import { useState } from 'react';
import Banner from './camponents/Banner/Banner';
import Formulario from './camponents/Formulario';
import Time from './camponents/Time';
import Rodape from './camponents/Rodape';


function App() {

  const times = [
    {
      time: 'Progamação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      time: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      time: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      time: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      time: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      time: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      time: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.time)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(value => <Time
        key={value.time}
        time={value.time}
        corPrimaria={value.corPrimaria}
        corSecundario={value.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === value.time)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
