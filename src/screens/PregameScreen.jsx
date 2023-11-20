function PregameScreen({onStartGameClicked}) {
    return <div className="pregame-screen">
        <h1>Pokemon Memory Cards</h1>
        <div className="instructions-container">
            Try to click all of the cards without clicking on the same one twice! Every time you click on a card 
            you have already clicked, your score resets.
        </div>
        <button onClick={onStartGameClicked}>Start Game</button>
    </div>
}

export default PregameScreen