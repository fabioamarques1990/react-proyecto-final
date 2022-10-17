import React from "react";

const Item = ({title, imagen, price}) => {
    return (
        <div className="card rounded shadow-sm border-0" style={{ height: '450px' }}>
            <div className="card-body p-4">
                <img src={imagen} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-center" style={{ color: '#80CECC' }}><b>{title}</b></h5>
                    <p className="card-text text-center" style={{ color: 'grey' }}>${price}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;

       