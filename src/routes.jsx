import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Linguagens from './pages/Linguagens'
import Projetos from './pages/Projetos'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/sobre' element={<Sobre />}></Route>
                <Route path='/linguagens' element={<Linguagens/>}></Route>
                 <Route path='/projetos' element={<Projetos/>}></Route>
                {/* <Route path='/contato' element={<Contato/>}></Route>
                <Route path='*' element={<Page404/>}></Route>  */}
            </Routes>
        </BrowserRouter>
    )
}