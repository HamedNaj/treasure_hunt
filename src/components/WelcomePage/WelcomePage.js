import React from 'react'
import {Paper, Typography, Button} from "@material-ui/core";

import useStyles from './styles'

const WelcomePage = ({welcome, setShowWelcomPage}) => {
  const classes = useStyles()
  return (
    <Paper style={{padding: '20px', borderRadius: '15px'}} elevation={6}>
      <div className={classes.card}>
        <Typography className={classes.questionText}> {welcome.text}</Typography>
        <div className={classes.imageSection}>
          <img className={classes.media}
               src={welcome.image}
               alt={'welcome'}/>
        </div>
        <Button variant='contained' color='primary' size='large' type='submit'
                fullWidth onClick={() => setShowWelcomPage(false)}>OK</Button>
      </div>
    </Paper>
  )
}

export default WelcomePage
