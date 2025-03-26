import { CarrinhoContext } from "@/context/CarrinhoContext"
import { useContext } from "react"
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducers/carrinhoReduce"

const addProdutoAction = (novoProduto) => ({
    type: ADD_PRODUTO,
    payload: novoProduto
})

const removerProdutoAction = (produtoId) => ({
    type: REMOVE_PRODUTO,
    payload: produtoId
})

const updateQuantidadeAction = (produtoId, quantidade) => ({
    type: UPDATE_QUANTIDADE,
    payload: { produtoId, quantidade }
})

export const useCarrinhoContext = () => {
    const { carrinho, dispatch, quantidade, valorTotal } = useContext(CarrinhoContext)

    function adicionarProduto(novoProduto) {
        dispatch(addProdutoAction(novoProduto));
    }

    const removerProduto = (id) => {
        const produto = carrinho.find((item) => item.id === id);

        if (produto && produto.quantidade > 1) {
            dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
        } else {
            dispatch(removerProdutoAction(id));
        }
    }

    const removerProdutoCarrinho = (id) => {
        dispatch(removerProdutoAction(id))
    }

    return {
        carrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        valorTotal,
        quantidade
    }
}