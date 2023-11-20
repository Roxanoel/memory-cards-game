function Card({imageUrl, cardId, onCardClicked, name}) {
    

    return( 
    <div className="card" onClick={() => onCardClicked(cardId)}>
        <div className="image-container">
            <img className="image" src={imageUrl} />
        </div>
        <div className="name-container">
            {name}
        </div>
    </div>
    )
}

export default Card