import { Header } from "@/components/Header"
import { FavoritesProvider } from "@/components/context/FavoriteContext"
import { Footer } from "@/components/Footer"
import { Outlet } from "react-router-dom"

export const PageBase = () => {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Outlet />
            </FavoritesProvider>
            <Footer />
        </main>
    )
}