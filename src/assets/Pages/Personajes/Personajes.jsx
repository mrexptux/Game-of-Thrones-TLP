// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Personajes.css'
import BuscadorPersonajes from '../../../components/BuscadorPersonajes'
import Gallery from './Gallery';
import axios from 'axios';
import Menu from '../Menu/Menu';
import House from "../../../components/House";

const Personajes = () => {
  const [characters, setCharacters] = useState([]);

  const urlBbdd = "http://localhost:3000/characters"

  useEffect(() => {
    const getCharacters = async () => {

      const res = await axios(urlBbdd);
      console.log(res.data)
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
