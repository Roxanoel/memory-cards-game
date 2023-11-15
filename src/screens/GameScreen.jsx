import Card from "../components/Card"

function GameScreen({data, onNewGameClicked}) {
    const handleCardClicked = (id) => console.log('clicked ID = ' + id)
    
    return( 
    <div>{data.map((itemData) => <Card key={itemData.id} imageUrl={itemData.imageUrl} cardId={itemData.id} onCardClicked={handleCardClicked} />)}
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
    )
}

export default GameScreen