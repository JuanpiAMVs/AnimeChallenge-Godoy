import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {

    const onAdd = (stock) => {
        alert('Has agregado' + stock + 'items al carrito')
    }

    return (
        <>
        <Link to={`/item/${props.id}`}>
        <div className="card">
                <img src={props.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <h1>{props.stock}</h1>
                    </div>
                    <ItemCount initial={1} stock={props.stock} onAdd={onAdd}></ItemCount>
            </div>
            {/* <p>{greeting}</p> */}
        </Link>
          
        </>
    )
}
export default Item;