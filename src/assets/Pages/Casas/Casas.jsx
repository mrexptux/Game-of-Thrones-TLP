import './Casas.css'
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Casa from './Casa';

const Casas = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const getHouses = async () => {
            const res = await axios.get('http://localhost:3000/houses');
            console.log(res.data)
                setHouses(res.data);
        }
        getHouses();
    }, []);

  return (  
    <div className='FondoCasas'>
      <Casa houses ={houses}/>
    </div>
  )
}

export default Casas;