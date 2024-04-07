
import "./Gallery.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = ({ characters }) => {

  const [filterPersonajes, setFilterPersonaje] = useState(characters);

  const handleFilter = (event) => {

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
      <div class="container">
        <div class="row">
          <div class="row justify-content-start">
            <div class="col-8">
              <input onChange={handleFilter} className="form-control input-class"></input>
            </div>
            <div class="col-4">
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-esp" /></button>
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-engla" /></button>
            </div>
          </div>
          <br />
          <div className="row justify-content-start gallery-scroll">
            {filterPersonajes.map(personajes => (
              <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img id={"scrollspyHeading" + personajes.id} className="img-responsive" src={"http://localhost:3000" + personajes.image} alt={personajes.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Gallery;