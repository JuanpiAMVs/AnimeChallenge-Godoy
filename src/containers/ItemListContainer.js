import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import customPromise from "../utils/customPromise";
const {products} = require('../utils/products');

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState ([]);   //setDatos funcion modificadora de {datos}
        useEffect(()=>{
            customPromise(2000, products)
                .then((result) => setDatos(result))
                .catch((error) => console.log(error))
        }, [])
    return (
        <>
        <div className="ItemListContainer">
            <ItemList items={datos}></ItemList>
        </div>   
        </>
    );
}

export default ItemListContainer;