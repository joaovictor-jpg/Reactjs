import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Favorite } from "./page/Favorite"
import { Home } from "./page/Home"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Favorites" element={<Favorite />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}