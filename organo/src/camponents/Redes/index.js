import './Rede.css';

const Rede = ({imagem, descricao}) => {
    return (
        <img className='img' src={imagem} alt={descricao} />
    );
}

export default Rede;