import ItemList from "../components/ItemList";
const data = [
    {   id:1,
        thumbnail:"https://m.media-amazon.com/images/I/61auN0wXGFL._AC_SL1000_.jpg",
        title:"Asuna",
        description: "Goddess of creation"
    },
    {   id:2,
        thumbnail:"https://m.media-amazon.com/images/I/61X8uAxsdML._AC_SL1500_.jpg",
        title:"Lucy Hearfilia",
        description: "Fairy Tail Final Season"
    },
    {   id:3,
        thumbnail:"https://m.media-amazon.com/images/I/61Si8lpc6QL._AC_SL1200_.jpg",
        title:"Shinobu Kocho",
        description: "Demon Slayer"
    }
]
const ItemListContainer = () => {
    return (
        <>
        <div className="ListContainer">
        {
            data.map(item => 
                <ItemList key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                />
                )
        }
        </div>
       
        </>
    );
}

export default ItemListContainer;