import "./Formulario.css"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corPrimaria, setCorPrimaria] = useState('');

    const salvarDados = (evento) => {
        evento.preventDefault()
        let id = uuidv4()
        let favoritar = false;
        props.aoColaboradorCadastrado({ id, nome, cargo, imagem, time, favoritar })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoNovoTime = (event) => {
        event.preventDefault()
        let id_time = uuidv4()
        let corSecundaria = hexToRgba(corPrimaria, 0.6)
        let nome = nomeTime
        props.aoNovoTime({ id_time, nome, corPrimaria, corSecundaria })
        setNomeTime('')
        setCorPrimaria('');
    }

    return (
        <main className="formulario">
            <form onSubmit={salvarDados}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo type="text" valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <Campo type="text" valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <Campo type="text" valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} label="Time" itens={props.times} />
                <Botao>
                    Criar card
                </Botao>
            </form>

            <form onSubmit={aoNovoTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo type="text" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <Campo type="color" valor={corPrimaria} aoAlterado={valor => setCorPrimaria(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <Botao>
                    Novo time
                </Botao>
            </form>
        </main>
    )
}

export default Formulario