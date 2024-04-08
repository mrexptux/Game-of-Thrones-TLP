
import "./Gallery.css";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"




const Gallery = ({ characters }) => {

  const navigate = useNavigate()


  const irHome = () => {
    navigate("/");
  }


  const [filterPersonajes, setFilterPersonaje] = useState(characters);

  const handleFilterGallery = (event) => {

    const value = event.target.value;
    const filtered = characters.filter(personajes => personajes.name.includes(value));
    setFilterPersonaje(filtered);

  };

  useEffect(() => {
    const getCharacters = async () => {

      const res = await axios('http://localhost:3000/characters');
      console.log(res.data)
      setFilterPersonaje(res.data);
    }
    getCharacters();
  }, []);





  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="row justify-content-start">
            <div className="col-8 barra">
              <input onChange={handleFilterGallery} className="form-control input-class"></input>
            </div>
            <div className="col-4">
              <button className="btn btn-default input-button" onClick={() => irHome()} ><img className="backgroud-idiomas-engla" src="../../../../public/IMG/iconoHouse.png" /></button>
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-esp" src="../../../../public/IMG/iconSp.png" /></button>
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-engla" src="../../../../public/IMG/iconEng.png" /></button>
            </div>
          </div>
          <br />
          <div className="row gallery-scroll">

            {filterPersonajes.map((personajes, index) => (
              <div key={index} className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img id={"scrollspyHeading" + personajes.id} className="img-responsive" src={personajes.image} alt={personajes.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;