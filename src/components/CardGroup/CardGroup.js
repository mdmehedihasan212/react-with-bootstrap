import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop pro', price: '35600' },
        { id: 1, name: 'Laptop pro max', price: '45600' },
        { id: 1, name: 'Laptop pro super', price: '60600' }
    ]
    return (
        <div>
            <div className="card-group">
                {
                    products.map(product => <Card key={product.id} product={product}></Card>)
                }

            </div>
        </div>
    );
};

export default CardGroup;