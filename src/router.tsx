import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Register } from "./pages/register"
import { Login } from "./pages/login"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router