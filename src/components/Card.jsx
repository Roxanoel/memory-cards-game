function Card({imageUrl, cardId, onCardClicked}) {
    

    return( 
    <div className="card" onClick={() => onCardClicked(cardId)}>
        <div className="image-container">
            <img className="image" height="150" src={imageUrl} />
        </div>
    </div>
    )
}

export default Card