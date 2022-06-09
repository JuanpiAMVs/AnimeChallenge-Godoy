import Item from "./Item";
 
const ItemList= ({items}) => {
    return (
        <>
        <div className="ItemList d-flex justify-content-around flex-wrap">
        {
            items.length > 0 
            ? items.map(item => 
                <Item key={item.id}
                id={item.id}
                price={item.price}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                stock={item.stock}
                />)
                : <p>Cargando...........</p>
        }
        </div>
       
        </>
    );
}

export default ItemList;