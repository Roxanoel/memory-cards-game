import { useState } from 'react'

import './App.css'
import PregameScreen from './screens/PregameScreen'
import LoadingScreen from './screens/LoadingScreen'
import GameScreen from './screens/GameScreen'

function App() {

  return (
    <>
      <PregameScreen />
      <LoadingScreen />
      <GameScreen /> 
    </>
  )
}

export default App
