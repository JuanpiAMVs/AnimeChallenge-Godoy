import { useEffect, useState } from "react";

const ItemCount = ({stock = 0, initial = 1, onAdd}) =>{
    const [count, setCount] = useState(0); //Hook

    useEffect(()=> {
        setCount(initial) //setCount modifica el valor de {count} con valores de {initial}
    },[])
    const add = () =>{
        if(count < stock) setCount(count+1)
    }
    const subtract = () =>{
        if(count > 1) setCount(count-1)
    }
    return(
        <>
        <div className="Count mt-4">
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