function WinScreen({attemptsCount, onNewGameClicked}) {
    return <div>
        {`Congratulations! You won after ${attemptsCount} attempts.`} 
        <button onClick={onNewGameClicked}>New Game</button>
    </div>
}
export default WinScreen