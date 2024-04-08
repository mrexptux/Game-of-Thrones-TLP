
import { useEffect, useState } from "react";
import axios from "axios";
import './Cronologia.css'
import House from "../../../components/House";




export default function Cronologia() {

  const [characters, setCharacters] = useState([])
  const urlBbdd = "http://localhost:3000/characters/"
  const getCharacters = () => {
        axios.get (urlBbdd).then(data => setCharacters(data.data))
  }
  
  useEffect(() => { 
    getCharacters()
  }, [])

  const [edad,setEdad] = useState(0)

  function ordenarItems(items, ascendente) {
    characters.sort(function (a, b) {
      if (ascendente) {
        setEdad(parseInt(b.age))
        return a.age - b.age;
      } else {
        setEdad(parseInt(a.age))
        return b.age - a.age;
      }
    });
   
    return characters
  }
  
  

const [ascendente, setAscendente] = useState(true);
  
  const handleClick = () => {

  setAscendente(!ascendente);
  const nuevosItems = ordenarItems([...characters], !ascendente);
  setCharacters(nuevosItems);
};

  console.log(characters) ;
  return (


    <>
      <House></House>
      
    <button className="btns" type='text' onClick={handleClick}>{edad ? edad : 0}</button>
      
      <div className="cronos">
        <div className='characters-age-left'>
          {characters.map((character, index) => index % 2 === 0 &&
            <div className='character-age-left' key={index}>
              <h3 className="letter">{character.age}</h3>
              <h3>{character.name}</h3>
              <div className='character-age_img'>
                <img className="image-char" src={character.image}></img></div>
            </div>
          
          )}
        </div>
      

          <div className='characters-age-right'>
            {characters.map((character, index) => index % 2 !== 0 &&
              <div className='character-age-right' key={index}>
                <h3>{character.age}</h3>
                <h3>{character.name}</h3>
                <div className='character-age_img'>
                  <img className="image-char" src={character.image}></img></div>
              </div>
            )}
          </div>
  
        </div>
      
    </>
  )
}
