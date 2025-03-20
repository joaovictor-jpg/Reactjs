import { useEffect, useState } from "react"
import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import capa from '../../assets/capa.png'
import { PostModelos } from "../../components/PostModelo"
import { DefaultPage } from "../DefaultPage"

export const Post = () => {
    const param = useParams()
    const nagation = useNavigate()
    const [dados, setDados] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/repos/joaovictor-jpg/${param.id}`).then(result => {
            if (!result.ok) {
                throw new Error("Erro ao buscar os dados");
            }
            return result.json()
        }).then(data => setDados(data)).catch((error) => {
            console.error("Erro na requisição:", error);
            nagation('*')
        })
    }, [param.id, nagation])
    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <PostModelos fotoCapa={capa} titulo={dados.name}>
                        <div>{dados.full_name}</div>
                    </PostModelos>
                } />
            </Route>
        </Routes>
    )
}