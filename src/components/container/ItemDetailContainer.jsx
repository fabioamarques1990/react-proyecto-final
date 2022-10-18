import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetail from '../item/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const itemsCollection = collection(db, 'items');
        const ref = doc(itemsCollection, id);
        getDoc(ref).then((res) => {
            setItem({
                id: res.id, ...res.data(),
            });
        });
    }, [id]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;
