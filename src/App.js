import React, {useState, useEffect} from 'react'
import Questions from './components/Questions/Questions'
import FinishedPage from './components/FinishedPage/FinishedPage'
import WelcomePage from './components/WelcomePage/WelcomePage'
import {getChallenges, getReward, getWelcome} from './api'

const App = () => {
  const [stage, setStage] = useState(localStorage.getItem('TREASURE_HUNT_STAGE') || 0)
  const [finished, setFinished] = useState(false)
  const [showWelcomePage, setShowWelcomPage] = useState(true)
  const [backgroundImage, setBackgroundImage] = useState(0)
  const [challenge, setChallenge] = useState({})
  const [reward, setReward] = useState({})
  const [welcome, setWelcome] = useState({})
  const lastStage = () => {
    if (challenge.firstQuestion) {
      setFinished(true)
    } else {
      setStage(stage - 1)
      localStorage.setItem('TREASURE_HUNT_STAGE', stage - 1)
    }
  }
  const nextStage = () => {
    if (challenge.lastQuestion) {
      setFinished(true)
    } else {
      setStage(stage + 1)
      localStorage.setItem('TREASURE_HUNT_STAGE', parseInt(stage) + 1)
    }
  }
  useEffect(() => {
    setWelcome(getWelcome())
  }, [])
  useEffect(() => {
    setChallenge(getChallenges(stage))
  }, [stage])
  useEffect(() => {
    if (finished)
      setReward(getReward())
  }, [finished])
  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundImage(((backgroundImage + 1) % 10));
    }, 10000);
    return () => clearInterval(timer);
  });

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px',
      backgroundImage: `url(/${backgroundImage}.jpg)`,
      backgroundSize: 'contain'
    }}>
      {showWelcomePage && <WelcomePage welcome={welcome} setShowWelcomPage={setShowWelcomPage}/>}
      {!finished && !showWelcomePage && <Questions nextStage={nextStage} lastStage={lastStage} challenge={challenge}/>}
      {finished && !showWelcomePage && <FinishedPage reward={reward}/>}
    </div>
  )
}

export default App;
