import React from 'react';
import './Card.css'
const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w400">
            <img height = "200px" width = "200px" src = {`https://robohash.org/${id}?300x300`} alt = "robot" /> 
            <div >
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;