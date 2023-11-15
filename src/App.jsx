import { useState } from 'react'

import './App.css'
import PregameScreen from './screens/PregameScreen'
import LoadingScreen from './screens/LoadingScreen'
import GameScreen from './screens/GameScreen'

function App() {
  const [gameState, setGameState] = useState('PREGAME')

  const initiateLoading = () => changeGameState('LOADING')
  const startGame = () => changeGameState('GAME')
  const reinitialiseGame = () => changeGameState('PREGAME')

  const changeGameState = (state) => {
    if (state === 'PREGAME' || state === 'GAME' || state === 'LOADING') {
      setGameState(state)
    } else throw new Error(`state is ${state}, should be either 'PREGAME', 'GAME', or 'LOADING'`)
  }

  return (
    <>
      {gameState === 'PREGAME' && <PregameScreen onStartGameClicked={initiateLoading} />}
      {gameState === 'LOADING' && <LoadingScreen />}
      {gameState === 'GAME' && <GameScreen />} 
    </>
  )
}

export default App
