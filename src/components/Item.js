const Item = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
            </div>
            {/* <p>{greeting}</p> */}
        </>
    )
}
export default Item;