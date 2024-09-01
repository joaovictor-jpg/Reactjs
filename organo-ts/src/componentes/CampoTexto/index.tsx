import { Interface } from 'readline'
import './CampoTexto.css'

interface CampoTextoProps {
    placeholder: string
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto