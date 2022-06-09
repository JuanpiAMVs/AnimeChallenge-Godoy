import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import customPromise from "../utils/customPromise";
import { useParams } from 'react-router';
const {products} = require('../utils/products');


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();



    useEffect(() => {
        customPromise(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result) )
            .catch(err => console.log(err))
    }, [datos]);



    return (
        <>
        <div className="ItemListContainer">
            <ItemList items={datos}></ItemList>
        </div>   
        </>
    );
}

export default ItemListContainer;