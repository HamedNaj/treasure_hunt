import React, {useState} from 'react'
import {Paper, Typography, TextField, Button} from "@material-ui/core";

import useStyles from './styles'

const Questions = ({nextStage,lastStage, challenge}) => {
  const [answer, setAnswer] = useState('')
  const [incorrect, setIncorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const classes = useStyles()

  const checkAnswer = () => {
    const trimedAnswer = answer.trim().replace(/ /g, '').toLowerCase()
    if (challenge.answers.includes(trimedAnswer)) {
      setAnswer('')
      setShowHint(false)
      nextStage()
    } else {
      setTimeout(() => {
        setIncorrect(false)
      }, 2000)
      setIncorrect(true)
    }
  }
  return (
    <Paper style={{padding: '20px', borderRadius: '15px', margin:'0px'}} elevation={6}>
      <div className={classes.card}>
        <Typography className={classes.questionText}> {challenge.question}</Typography>

        <TextField fullWidth variant={'outlined'} label={'answer'} value={answer} error={incorrect}
                   onChange={(e) => setAnswer(e.target.value)} helperText={incorrect ? 'INCORRECT ANSWER :|' : ''}/>

        <Typography className={classes.descText}
        >{challenge.desc}</Typography>

        {showHint && <Typography className={classes.hintText}>{challenge.hint}</Typography>}
        {challenge.image &&
        <div className={classes.imageSection}>
          <img className={classes.media}
               src={challenge.image}
               alt={'chall'}/>
        </div>}
        <div className={classes.actionContainer}>
          {!challenge.firstQuestion && <Button variant='contained' color='primary' size='large' type='submit'
                  fullWidth onClick={lastStage}>Back</Button>}
          <Button variant='contained' color='secondary' size='large' type='submit'
                  fullWidth onClick={() => setShowHint(!showHint)}>Hint</Button>
          <Button variant='contained' color='primary' size='large' type='submit'
                  fullWidth onClick={checkAnswer}>Submit</Button>
        </div>
      </div>
    </Paper>
  )
}

export default Questions
