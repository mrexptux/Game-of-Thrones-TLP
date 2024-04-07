// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Personajes.css'
import BuscadorPersonajes from '../../../components/BuscadorPersonajes'
import Gallery from './Gallery';
import axios from 'axios';
import Menu from '../Menu/Menu';
import { ScrollSpy } from 'bootstrap';

const Personajes = () => {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    const getCharacters = async () => {

      const res = await axios('http://localhost:3000/characters');
      console.log(res.data)
        setCharacters(res.data); 
      } 
    getCharacters();
  }, []);




  return (
    <>
      <header>
        <BuscadorPersonajes></BuscadorPersonajes>
      </header>
      <body>
            <Gallery characters={characters}/>
        <div>
          <Menu></Menu>
        </div>
      </body>
   {/* <div className='personajecabezado'>
      <div><BuscadorPersonajes></BuscadorPersonajes></div>
        
       <div><Gallery characters={characters} /></div> 
     
      </div>
      */}
    </>
  )
}

export default Personajes;
