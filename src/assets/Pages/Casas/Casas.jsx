import './Casas.css'
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Casa from './Casa';
import House from '../../../components/House';

const Casas = () => {
    const [houses, setHouses] = useState([]);

    const urlBbddH = "http://localhost:3000/houses"
  
    useEffect(() => {
        const getHouses = async () => {
            const res = await axios.get(urlBbddH);
            console.log(res.data)
                setHouses(res.data);
        }
        getHouses();
    }, []);

  return (  

    <>
      <House>

      </House>
      <body>
        <div className='FondoCasas'>
      <Casa houses ={houses}/>
    </div>
      </body>
    </>
    
  )
}

export default Casas;