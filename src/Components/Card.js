import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
    return (
        <div className='tc grow bg-light-green br3 pa1 ma3 dib bw3 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;