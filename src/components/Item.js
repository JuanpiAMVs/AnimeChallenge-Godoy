import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {

    const onAdd = (stock) => {
        alert('Has agregado ' + stock + ' items al carrito')
    }

    return (
        <>

<div className="producto"> 
        <Link to={`/item/${props.id}`}>
      <img src={props.thumbnail} alt=".."/></Link>
      <div className="i-specs">
        <span className="i-anime">{props.description}</span>
        <h2 className="i-price">${props.price}</h2>
        <span className="i-title">{props.title}</span>
        <p>Units available: <b>{props.stock}</b></p>
        {props.categoryId}
        <ItemCount initial={1} stock={props.stock} onAdd={onAdd}></ItemCount>
      </div>
      
    </div>
        </>
    )
}
export default Item;