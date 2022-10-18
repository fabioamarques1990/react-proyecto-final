import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <div className="row mt-5 mx-5" >
            <div class="lc-block mb-4">
				<h2 editable="inline" class="display-2 mb-0"><b>Actividades</b></h2>
				<p editable="inline">Puedes seleccionar a tu gusto, entre SUP y Surf.</p>
			</div>

            {items.map(item => (
                <div key={item.id} className="col-md-6 py-3">
                    <div className="bg-white rounded shadow display-3 p-4" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC', textAlign: 'center' }} >
                        <Item title={item.title} price={item.price} />
                    </div>
                    <div className="container mt-2 py-4" style={{ textAlign: 'center' }}>
                        <Link to={"/category/activity/" + item.id} className="btn" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC', textAlign: 'center' }}>Ver más</Link>
                    </div>
                </div>)
            )}
        </div>
    );
}

export default ItemList;