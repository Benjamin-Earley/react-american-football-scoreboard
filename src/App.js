//TODO: STEP 1 - Import the useState hook.
import React from "react";
import { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
//import TopRow from "./TopRow"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const homeTeamBaby = useState('Falcons')
  const awayTeam = useState('Saints')
  const [currentHomeScore, setNewHomeScore] = useState(21)
  const [currentAwayScore, setNewAwayScore] = useState(0)
  const [seconds, setNewSeconds] = useState(10)
  const [minutes, setNewMinutes] = useState('00:')

  setTimeout(() => {
    setNewMinutes(seconds < 11 && seconds > 0 ? '00:0' : '')
    setNewSeconds(seconds > 0 ? seconds - 1 : 'Final')
  }, 1000)
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeamBaby}</h2>  
            <div className="home__score">{currentHomeScore}</div>
          </div>
          <div className="timer">{minutes}{seconds}</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{currentAwayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setNewHomeScore(currentHomeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setNewHomeScore(currentHomeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setNewAwayScore(currentAwayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setNewAwayScore(currentAwayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
