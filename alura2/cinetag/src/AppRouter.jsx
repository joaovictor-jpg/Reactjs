import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Favorite } from "./page/Favorite"
import { Home } from "./page/Home"
import { NotFound } from "./page/NotFound"
import { Video } from "./page/video"
import { PageBase } from "./page/PageBase"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="Favorites" element={<Favorite />}></Route>
                    <Route path=":id" element={<Video />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}