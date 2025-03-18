import './Campo.css'

const Campo = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type} value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default Campo