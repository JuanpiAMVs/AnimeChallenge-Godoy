import { Link } from "react-router-dom";

const ItemDetailBtn = () =>{
    return(
<Link to="/cart"><button type="button" className="btn btn-info btn-stock">Cart</button></Link>
    )
    
}

export default ItemDetailBtn;