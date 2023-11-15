import { useState } from "react"
import shuffle from "../utils/shuffle"
import Card from "../components/Card"

function GameScreen({data, onNewGameClicked}) {
    const [dataInOrder, setDataInOrder] = useState(data)

    const shuffleCards = () => {
        const copy = [...dataInOrder]
        const shuffledData = shuffle(copy)
        console.log(shuffledData)
        setDataInOrder([...shuffledData])
    }

    const handleCardClicked = (id) => {
        console.log('clicked ID = ' + id)
        // TO DO: Check if the card was already clicked
        // Shuffle the cards
        shuffleCards()
    }

    return( 
    <div>
        {dataInOrder.map((itemData) => <Card key={itemData.id} imageUrl={itemData.imageUrl} cardId={itemData.id} onCardClicked={handleCardClicked} />)}
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
    )
}

export default GameScreen