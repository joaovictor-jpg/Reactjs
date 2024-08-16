import { FcLikePlaceholder, FcLike  } from "react-icons/fc";
import { IoIosCloseCircle } from "react-icons/io";
import './Card.css';

const Card = ({nome, cargo, imagem, corDeFundo, aoDeletar, id, colaborador, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    return(
        <div className="colaborador">
            <IoIosCloseCircle size={30} className="deletar" onClick={() => aoDeletar(id)} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                {colaborador.favorito? <FcLike {...propsFavorito} /> : <FcLikePlaceholder {...propsFavorito} /> }
            </div>
        </div>
    );
}

export default Card;