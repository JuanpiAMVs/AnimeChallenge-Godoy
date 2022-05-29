import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial); //Hook
    const add = () =>{
        if(count < stock) setCount(count+1)
    }
    const subtract = () =>{
        if(count > 0) setCount(count-1)
    }
    return(
        <>
        <div className="Count">
            <button onClick={subtract} type="button" className="btn btn-primary btn-stock">-</button>
            <div className="stock">
                <p>{count}</p>
            </div>
            <button onClick={add} type="button" className="btn btn-primary btn-stock">+</button>
            <button onClick={() => onAdd(count)}>Agregar</button>
        </div>
        </>
    )
}

export default ItemCount;