function GameScreen({data, onNewGameClicked}) {
    return <div>{data.map((itemData) => <div key={itemData.id}>{itemData.imageUrl}</div>)}
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
}

export default GameScreen