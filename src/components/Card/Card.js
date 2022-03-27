import React from 'react';

const Card = ({ product }) => {
    const { name, price } = product;
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price}</p>
            </div>
        </div>
    );
};

export default Card;