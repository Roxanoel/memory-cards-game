import Card from "../components/Card"

function GameScreen({data, onNewGameClicked}) {
    return <div>{data.map((itemData) => <Card key={itemData.id} imageUrl={itemData.imageUrl} />)}
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
}

export default GameScreen