import React from "react";
import { useState } from "react";
import "./App.css";

function TopRow() {
  const homeTeamBaby = useState('Falcons')
  const awayTeam = useState('Saints')
  const [currentHomeScore, setNewHomeScore] = useState(42)
  const [currentAwayScore, setNewAwayScore] = useState(0)
  const [time, setNewTime] = useState("00:10")


  setTimeout(() => {
    setNewTime('Final')
  }, 10000)

  return (
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeamBaby}</h2>  
            <div className="home__score">{currentHomeScore}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{currentAwayScore}</div>
          </div>
        </div>
  )
}

//export default TopRow