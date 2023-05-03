import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Register } from "./pages/register"
import { Login } from "./pages/login"
import { Mapeia } from "./pages/mapeia"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/site-mapeia' element={<Mapeia />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router