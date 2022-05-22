import Item from "./Item";

const ItemList= ({items}) => {
    return (
        <>
        <div className="ItemList">
        {
            items.length > 0 
            ? items.map(item => 
                <Item key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description} 
                />)
                : <p>Cargando...........</p>
        }
        </div>
       
        </>
    );
}

export default ItemList;