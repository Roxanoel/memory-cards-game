function Card({imageUrl, cardId, onCardClicked, name, types}) {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return( 
    <div className="card" onClick={() => onCardClicked(cardId)}>
        <div className="image-container">
            <img className="image" src={imageUrl} />
        </div>
        <div className="name-container">
            {capitalize(name)}
            {JSON.stringify(types)}
        </div>
    </div>
    )
}

export default Card