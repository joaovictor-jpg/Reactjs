import "./Colaborador.css"
import { IoCloseCircle } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Colaborador = (props) => {

    const aoFavoritar = () => {
        props.aoFavoritar(props.id)
    }

    const propsFavoritar = {
        size: 25,
        onClick: aoFavoritar
    }

    return(
        <div className="colaborador">
            <IoCloseCircle size={25} className="deletar" onClick={() => props.aoDeletar(props.id)} />
            <div className="cabecalho" style={{ backgroundColor: props.corPrimaria }}>
                <img src={props.image} alt="Foto de pergil" />
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className="favoritar">
                    {props.favoritar ? <MdFavorite {...propsFavoritar} color="#ff0000" /> : <MdFavoriteBorder {...propsFavoritar} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador