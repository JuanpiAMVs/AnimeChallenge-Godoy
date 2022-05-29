import ItemCount from "./ItemCount";

const Item = (props) => {

    const onAdd = (stock) => {
        alert('Has agregado' + stock + 'items al carrito')
    }

    return (
        <>
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
        </>
    )
}
export default Item;