
const Food = (props) => {

    return (
        <div className="food-item">
            <h2>{props.name}</h2>
            <img className="food" src={props.image} alt="anh food"></img>
            <h3 className="price">{Intl.NumberFormat('en-US').format(props.price)}</h3>
        </div>
    )
}

export default Food