import Item from "./Item";
 
const ItemList= ({items}) => {
    return (
        <>
        <div className="ItemList d-flex justify-content-between flex-wrap">
        {
            items.length > 0 
            ? items.map(item => 
                <Item key={item.id}
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