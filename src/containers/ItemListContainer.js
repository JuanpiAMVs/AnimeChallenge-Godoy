import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';



const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
}, [idCategory]);

    return (
        <>
        <div className="ItemListContainer">
            <ItemList items={datos}></ItemList>
        </div>   
        </>
    );
}

export default ItemListContainer;