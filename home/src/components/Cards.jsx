import React from 'react'
import "./Cards.css";

const Cards = ({image,title,year,description}) => {

    return (
        <div className="card_container">
            <img src={image} alt="film image"/>
            <div className="card_data">
                <h2 className="title">{title}</h2>
                <h3 className="year">{year}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default Cards