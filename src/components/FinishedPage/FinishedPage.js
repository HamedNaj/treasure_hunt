import React from 'react'
import {Paper, Typography} from "@material-ui/core";

import useStyles from './styles'

const FinishedPage = ({reward}) => {
  const classes = useStyles()
  return (
    <Paper style={{padding: '20px', borderRadius: '15px'}} elevation={6}>
      <div className={classes.card}>
        <Typography className={classes.questionText}> {reward.text}</Typography>
        <img className={classes.media}
             src={reward.image}
             alt={'reward'}/>
      </div>
    </Paper>
  )
}

export default FinishedPage
