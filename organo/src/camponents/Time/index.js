import Card from '../Card';
import './Time.css';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ? <section className='time' style={{
            backgroundColor: props.corSecundario
        }}>
            <h3 style={
                {
                    borderColor: props.corPrimaria
                }
            }>{props.time}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {
                    return <Card
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.img}
                        time={colaborador.time}
                        corDeFundo={props.corPrimaria}
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section> : ''
    );
}

export default Time;