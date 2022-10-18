import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemList from "../item/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { activity } = useParams();

    useEffect(() => {
        const itemsCollection = collection(db, 'items');
        const ref = activity
            ? query(itemsCollection, where('category', '==', activity))
            : itemsCollection;

        getDocs(ref).then((resp) => {
            console.log(resp);
            const items = resp.docs.map((item) => {
                return {
                    id: item.id, ...item.data(),
                };
            });
            setItems(items);
        });
    }, [activity]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;