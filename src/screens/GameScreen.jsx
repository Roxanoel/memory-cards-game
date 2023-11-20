import { useState } from "react"
import shuffle from "../utils/shuffle"
import Card from "../components/Card"

function GameScreen({data, onNewGameClicked}) {
    const [dataInOrder, setDataInOrder] = useState(data)
    const [clickedItemIds, setClickedItemIds] = useState([])

    const shuffleCards = () => {
        const copy = [...dataInOrder]
        const shuffledData = shuffle(copy)
        setDataInOrder([...shuffledData])
    }

    const generateCards = () => {
        console.log(dataInOrder)
        return dataInOrder.map((itemData) => <Card key={itemData.id} name={itemData.name} imageUrl={itemData.image} cardId={itemData.id} onCardClicked={handleCardClicked} />)
    }

    const handleCardClicked = (id) => {
        // TO DO: Check if the card was already clicked
        if (clickedItemIds.includes(id)) {
            // reset the array 
            setClickedItemIds([])
        }
        else {// add id to the list 
            setClickedItemIds([...clickedItemIds, id])
        }
        // Shuffle the cards
        shuffleCards()
    }

    return( 
    <div className="game-screen">
        <div className="scoreboard">{`Score: ${clickedItemIds.length}`}</div>
        <div className="game-board">
            {generateCards()}
        </div>
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
    )
}

export default GameScreen