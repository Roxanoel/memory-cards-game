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
    <div>
        <div className="scoreboard">{`Score: ${clickedItemIds.length}`}</div>
        <div className="game-board">
            {dataInOrder.map((itemData) => <Card key={itemData.id} imageUrl={itemData.imageUrl} cardId={itemData.id} onCardClicked={handleCardClicked} />)}
        </div>
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
    )
}

export default GameScreen