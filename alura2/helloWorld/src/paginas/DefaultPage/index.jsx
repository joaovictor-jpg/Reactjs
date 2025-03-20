import { Outlet } from "react-router-dom"
import { Banner } from "../../components/Banner"

export const DefaultPage = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}