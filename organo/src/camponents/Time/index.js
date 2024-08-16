import Card from '../Card';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ? <section className='time' style={{
            backgroundColor: hexToRgba(props.cor, '0.3')
        }}>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' className='input-cor' />
            <h3 style={
                {
                    borderColor: props.cor
                }
            }>{props.time}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {
                    return <Card
                        key={colaborador.id}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.img}
                        time={colaborador.time}
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar}
                        colaborador={colaborador}
                        aoFavoritar={props.aoFavoritar}
                    />
                })}
            </div>
        </section> : ''
    );
}

export default Time;