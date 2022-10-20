import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className='cardBody'>
        <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">Fifa 23</div>
        <div className="card-body">
            <p className="card-text">Los avances en la tecnología HyperMotion2 proporcionan aún más acción y realismo al campo de juego en PS5.</p>
            <button type="button" className="btn btn-outline-light">Comprar</button>
            <p>{greeting}</p>
        </div>
        </div>
        </div>
        </>
    );
    
}

export default ItemListContainer;
