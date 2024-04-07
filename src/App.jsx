import './App.css'
import Home from './assets/Pages/Home/Home'
import Casas from './assets/Pages/Casas/Casas'
import Personajes from './assets/Pages/Personajes/Personajes'
import Cronologia from './assets/Pages/Cronologia/Cronologia'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Personaje from './assets/Pages/Personaje/Personaje'
import Menu from './assets/Pages/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className='caja'>
      <Router>
        {/* ESTO ES UN MENU */}
        <Menu></Menu>
        {/* ESTO ES LA DECLARACIÓN DE RUTAS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casas" element={<Casas />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/cronologia" element={<Cronologia />} />
          <Route path="/personaje" element={<Personaje />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
