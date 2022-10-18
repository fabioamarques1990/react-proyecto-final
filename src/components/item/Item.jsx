import React from "react";

const Item = ({ title, price }) => {
    return (
        <div className="card rounded shadow-sm border-0" style={{ height: '250px' }}>
            <div className="card-body p-4">
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{title}</b></h5>
                    <p className="card-text text-center">${price}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;

