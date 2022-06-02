import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import customPromise from "../utils/customPromise";
import { useParams } from 'react-router';
const {products} = require('../utils/products');


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState ([]);   //setDatos funcion modificadora de {datos}
    const { categoryId} = useParams();

    console.log(categoryId);

    useEffect(() => {
        customPromise(2000, products.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);



/*     const { id } = useParams();

        useEffect(()=>{
            customPromise(2000, products.filter(item => {
                         if (item.categoryId === undefined) return item;
            return item.categoryId === parseInt(id)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [id]); */
    return (
        <>
        <div className="ItemListContainer">
            <ItemList items={datos}></ItemList>
        </div>   
        </>
    );
}

export default ItemListContainer;