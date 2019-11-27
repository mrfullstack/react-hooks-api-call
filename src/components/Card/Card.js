import React from 'react';
import './Card.css'

const Card = ({name,image}) => {
    return (
        <div className="card">
            <img src={image} alt="Avatar" style={{width:'100%'}} />
            <div className="container">
                <h4><b>{name}</b></h4>
            </div>
        </div>
    )
}

export default Card