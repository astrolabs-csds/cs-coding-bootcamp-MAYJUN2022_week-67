function Card(props) {
    return (
        <div className="card" style={{'width': '300px','margin-bottom': '20px'}}>
            <img src={props.imageSrc} width="300" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;








