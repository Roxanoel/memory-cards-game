function Card({imageUrl}) {
    return( 
    <div className="card">
        <div className="image-container">
            <img className="image" height="150" src={imageUrl} />
        </div>
    </div>
    )
}

export default Card