// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Casa.css";

const Casa = ({ houses }) => {
    return (
        <div className='galleryHouse'>
            {houses.map(house => (
                <div className='house-container' key={house.id}>
                    <img className='imgHouse' src={"http://localhost:3000" + house.image} alt={house.name} />
                    <div className="house-details">
                        <h3>{house.name}</h3>
                        <p>{house.settlement}</p>
                        
                  
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Casa;