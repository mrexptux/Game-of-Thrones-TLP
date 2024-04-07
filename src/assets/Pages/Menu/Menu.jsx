import React from 'react'
import { Link } from 'react-router-dom'


import './Menu.css'
export default function Menu() {
    return (
        <div className='MenuStilo'>
            <header>
                <nav>
                    <Link className='estiloNav' to="/personajes">Personajes</Link>
                    <Link className='estiloNav' to="/casas">Casas</Link>
                    <Link className='estiloNav' to="/cronologia">Cronologia</Link>
                </nav>
            </header>

        </div>

    )
}
