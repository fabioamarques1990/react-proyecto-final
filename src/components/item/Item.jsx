import React from "react";

const Item = ({title, price}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center"><b>{title}</b></h5>
                <p className="card-text text-center">${price}</p>
            </div>
        </div>
    );
}

export default Item;