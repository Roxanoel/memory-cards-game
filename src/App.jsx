import { useState } from 'react'

import './App.css'
import PregameScreen from './screens/PregameScreen'
import LoadingScreen from './screens/LoadingScreen'
import GameScreen from './screens/GameScreen'
import WinScreen from './screens/WinScreen'

function App() {
  const [gameState, setGameState] = useState('PREGAME')
  const [cardData, setCardData] = useState([])
  const [attemptsCount, setAttemptsCount] = useState(0)

  const initiateLoading = () => changeGameState('LOADING')
  const startGame = (data) => {
    setCardData(data)
    changeGameState('GAME')
  }
  const reinitialiseGame = () => {
    setCardData([])
    //setAttemptsCount(1)
    changeGameState('PREGAME')
  }

  const winGame = () => {
    changeGameState('WIN')
  }

  const changeGameState = (state) => {
    if (state === 'PREGAME' || state === 'GAME' || state === 'LOADING' || state === 'WIN') {
      setGameState(state)
    } else throw new Error(`state is ${state}, should be either 'PREGAME', 'GAME', 'LOADING', or 'WIN'`)
  }

  return (
    <>
      {gameState === 'PREGAME' && <PregameScreen onStartGameClicked={initiateLoading} />}
      {gameState === 'LOADING' && <LoadingScreen onDataLoaded={startGame} />}
      {gameState === 'GAME' && <GameScreen data={cardData} onNewGameClicked={reinitialiseGame} onNewAttempt={() => {setAttemptsCount(attemptsCount + 1)}} onWin={winGame} />} 
      {gameState === 'WIN' && <WinScreen attemptsCount={attemptsCount} onNewGameClicked={reinitialiseGame} />}
    </>
  )
}

export default App
