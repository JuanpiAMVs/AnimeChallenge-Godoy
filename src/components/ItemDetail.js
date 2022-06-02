import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {

    const onAdd = (stock) => {
        alert('Seleccionaste ' + stock + ' items')
    }
    console.log(item)
    return (
        <>
            <div className="ItemDetail">
                {
                    item && item.id
                        ?
                        <div className="d-flex">
                            <img src={item.thumbnail}/>
                            <div>
                                <h1 className="my-5">{item.title}</h1>
                                <h3>{item.description}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse. Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse
                                </p>
                                <p>{item.stock} stock available</p>
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
                            </div>
                        </div>
                        : <p>Cargando...........</p>
                }
            </div>
        </>
        
    )
}

export default ItemDetail;