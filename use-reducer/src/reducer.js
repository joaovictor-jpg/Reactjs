export const ADICIONANDO_FRASE = 'ADICIONAR_FRASE';
export const EXCLUIR_FRASE = 'EXCLUIR_FRASE';

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONANDO_FRASE:
            if (acao.frase.length < 20) {
                alert('Frase deve ser maior que 20 caracter');
                return estado;
            }
            if (estado.includes(acao.frase)) {
                alert('Não é permitido frases repetidas!');
                return estado;
            }
            return [...estado, acao.frase];
        case EXCLUIR_FRASE:
            return estado.filter(frase => frase !== acao.frase);
        default:
            return estado;
    }

}


export default reducer;