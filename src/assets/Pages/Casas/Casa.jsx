// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import "./Casa.css";

import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Casa = ({ houses }) => {

  const navigate = useNavigate()

  const irHome = () => {
    navigate("/");
  }



  const [filterCasas, setFilterCasas] = useState(houses);

  const handleFilterHouses = (event) => {

    const value = event.target.value;
    const filtered = houses.filter(casas => casas.name.includes(value));
    setFilterCasas(filtered);

  };

  useEffect(() => {
    const getCharacters = async () => {

      const res = await axios('http://localhost:3000/houses');
      console.log(res.data)
      setFilterCasas(res.data);
    }
    getCharacters();
  }, []);


  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="row justify-content-start">
            <div className="col-8 barra">
              <input onChange={handleFilterHouses} className="form-control input-class"></input>
            </div>
            <div className="col-4">
              <button className="btn btn-default input-button" onClick={() => irHome()} ><img className="backgroud-idiomas-engla" src="../../../../public/IMG/iconoHouse.png" /></button>
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-esp" src="../../../../public/IMG/iconSp.png" /></button>
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-engla" src="../../../../public/IMG/iconEng.png" /></button>
            </div>
          </div>
          <br />
          <div className="row gallery-scroll">
            {filterCasas.map((casas, index) => (
              <div key={index} className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img id={"scrollspyHeading" + casas.id} className="img-responsive" src={casas.image} alt={casas.name} />
                <div className="house-details">
                  <h3>{casas.name}</h3>
                  <p>{casas.settlement}</p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Casa;

{/*<div className='galleryHouse'>
            {houses.map((house, index) => (
                <div key={index} className='house-container'>
                    <img className='imgHouse' src={house.image} alt={house.name} />
                    <div className="house-details">
                        <h3>{house.name}</h3>
                        <p>{house.settlement}</p>
                        
                  
                    </div>
                </div>
                ))}
            </div>*/}