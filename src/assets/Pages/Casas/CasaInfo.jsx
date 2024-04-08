import React, { useEffect, useState } from 'react'
import "./CasaInfo.css";
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function CasaInfo() {

    const urlBbddH = "http://localhost:3000/houses"

    const [house, setHouse] = useState([]);

    const { id } = useParams();

    const getHouse = async () => {
        const response = await axios(urlBbddH + id)
        setHouse(response.data)
        console.log(response)
    }


    useEffect(() => {
        getHouse();
    }, [])

    return (

        <div className='container'>
            <div className='row justify-content-start'>
                <div className='col-8'>
                    <img src={http://localhost:3000/${house.image}} alt={house.name} />
                    <h3>{house.name} </h3>
                </div>
                <div className='col-4'>
                    <h3> SEDE</h3>
                    <p>{house.settlement} </p>
                </div>
                <div>
                    <h3>REGION </h3>
                    <p>{house.region}</p>
                </div>
                <div>
                    <h3>ALIANZAS</h3>
                    <p>{house.alliances[0]} </p>
                    <p>{house.alliances[1]} </p>
                </div>

                <div>
                    <h3>RELIGIONES</h3>
                    <p>{house.religions} </p>
                </div>

                <div>
                    <h3>FUNDACION</h3>
                    <h3>{house.foundation} </h3>
                </div>
            </div>
        </div>
    )


}