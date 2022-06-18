import { useEffect, useState } from "react"
import { firestoreFetchOne } from "../utils/firestoreFetch"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{
    const [data, setData] = useState({});
    const { idItem } = useParams();
    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={data} />
    )

}

export default ItemDetailContainer