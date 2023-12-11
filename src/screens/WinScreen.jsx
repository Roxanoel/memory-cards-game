function WinScreen({attemptsCount, onNewGameClicked}) {
    return <div className="win-screen">
        <div>{`Congratulations! You won after ${attemptsCount} attempts.`}</div> 
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
}
export default WinScreen