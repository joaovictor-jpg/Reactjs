import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <input value={props.corSecundaria} onChange={event => { props.aoMudarCor(props.id, event.target.value) }} type="color" className="color" />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {
                    return <Colaborador
                        key={colaborador.id}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        image={colaborador.imagem}
                        time={colaborador.time}
                        corPrimaria={props.corPrimaria}
                        favoritar={colaborador.favoritar}
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time