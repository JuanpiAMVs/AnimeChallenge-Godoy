import { useEffect, useState } from "react"
import customPromise from "../utils/customPromise"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"
const { products } = require ('../utils/products')


const ItemDetailContainer = () =>{
    const [data, setData] = useState({});
    const {idItem} = useParams();

    useEffect(() =>{
        customPromise(2000, products.find(item => item.id === parseInt(idItem)))
            .then((result) => {
                setData(result)
                console.log(idItem)
            }).catch((err) => {
                console.log(err)
            });
    },[]);

    return(
        <ItemDetail item={data} />
    )

}

export default ItemDetailContainer