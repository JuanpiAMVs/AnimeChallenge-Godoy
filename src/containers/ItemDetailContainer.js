import { useEffect, useState } from "react"
import customPromise from "../utils/customPromise"
import ItemDetail from "../components/ItemDetail"
const { products } = require ('../utils/products')


const ItemDetailContainer = () =>{
    const [data, setData] = useState({});

    useEffect(() =>{
        customPromise(2000, products[0])
            .then((result) => {
                setData(result)
            }).catch((err) => {
                console.log(err)
            });
    },[]);

    return(
        <ItemDetail item={data} />
    )

}

export default ItemDetailContainer