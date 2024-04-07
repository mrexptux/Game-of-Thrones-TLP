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
      setCharacters(res.data);
    }
    getCharacters();
  }, []);




  return (
    <>

      <body>
        <Gallery characters={characters} />
      </body>
    </>
  )
}

export default Personajes;
