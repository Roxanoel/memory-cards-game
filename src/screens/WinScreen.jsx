function WinScreen({attemptsCount, onNewGameClicked}) {
    return <div className="win-screen">
        <div>{`Congratulations! You won after ${attemptsCount} ${attemptsCount > 1 ? 'attempts' : 'attempt'}.`}</div> 
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
}
export default WinScreen