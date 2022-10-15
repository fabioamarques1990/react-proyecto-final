import React from "react";
import Item from "./Item";
import {Link} from "react-router-dom";

const ItemList = ({items}) => {
    return (
        <div className="row mt-5 mx-5" >
            <h2>Actividades:</h2>
            {items.map(item => (
                <div key={item.id} className="col-md-12 py-3">
                    <Item title={item.title} price={item.price} category={item.category.sup} />
                    <Link to={"/category/activity/" + item.id} className="btn btn-primary">Ver más</Link>
                </div>)
            )}
        </div>
    );
}

export default ItemList;