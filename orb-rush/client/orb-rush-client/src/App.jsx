import { useState } from 'react'
import GameBoard from './components/GameBoard'
import './App.css'
import Player from './components/Player'

function App() {

  return (
    <>
  <div id="game-container">
    <div id="player-container">
      <Player playerName="Jerad"/>
      <Player playerName="Grace"/>
    </div>
      <GameBoard/>
  </div>    
      </>
  )
}

export default App
