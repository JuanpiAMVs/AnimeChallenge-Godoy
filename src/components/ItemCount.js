import { useState } from "react";

const ItemCount = () =>{
    const [stock, setStock] = useState(0); //Hook
    const add = () =>{
        if(stock < 5) setStock(stock+1)
    }
    const subtract = () =>{
        if(stock > 0) setStock(stock-1)
    }
    return(
        <>
        <div className="Count">
            <p>stock</p>
            <button onClick={add} type="button" class="btn btn-primary btn-stock">+</button>
            <div className="stock">
                <p>{stock}</p>
            </div>
            <button onClick={subtract} type="button" class="btn btn-primary btn-stock">-</button>
        </div>
        </>
    )
}

export default ItemCount;