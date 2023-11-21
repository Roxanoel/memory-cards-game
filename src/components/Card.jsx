import typeColours from "../utils/pokemonTypes"

function Card({imageUrl, cardId, onCardClicked, name, types}) {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const generateGradientColours = () => {
        const colourOne = typeColours[types[0].type.name.toUpperCase()]
        const colourTwo = types.length > 1 ? typeColours[types[1].type.name.toUpperCase()] : colourOne

        console.log(`${name}: ${colourOne} & ${colourTwo}`)

        return {backgroundImage: `linear-gradient(145deg, ${colourOne}, ${colourTwo})`}
    }

    return( 
    <div className="card" onClick={() => onCardClicked(cardId)}>
        <div className="image-container">
            <img className="image" src={imageUrl} />
        </div>
        <div className="name-container" style={generateGradientColours()}>
            {capitalize(name)}
        </div>
    </div>
    )
}

export default Card