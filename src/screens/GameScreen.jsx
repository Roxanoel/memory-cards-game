function GameScreen({data, onNewGameClicked}) {
    return <div>{data}
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
}

export default GameScreen