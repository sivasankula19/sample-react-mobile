import React, { useState, useEffect } from 'react'
import { Button, Box, Grid, Typography } from '@mui/material';
import './App.css'


const winSeries = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const inititalState = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' }
function App() {
  const [boxes, setboxes] = useState({ ...inititalState })
  const [turn, setTurn] = useState('X')
  const [winner, setWinner] = useState('')
  const [error, setError] = useState('')
  const [score, setScore] = useState({ 'X': 0, 'O': 0 })

  useEffect(() => {
    winSeries.forEach((series) => {
      if (boxes[series[0]] !== '' && (boxes[series[0]] === boxes[series[1]]) && (boxes[series[1]] === boxes[series[2]])) {
        setWinner(() => boxes[series[0]])
      }
    })
    // eslint-disable-next-line
  }, [turn])


  const handleGame = (index) => {
    if (boxes[index] === '') {
      if (turn === 'X') {
        setScore({ ...score, 'X': score['X'] + 1 })
        setboxes({ ...boxes, [index]: 'X' })

      }
      else {
        setScore({ ...score, 'O': score['O'] + 1 })
        setboxes({ ...boxes, [index]: 'O' })
      }
      setTurn(turn === 'X' ? 'O' : 'X')
      setError('')
      return;
    }
    setError('Can not click on the filled box')
  }

  const handleReset = () => {
    setboxes({ ...inititalState })
    setTurn('X')
    setWinner('')
    setError('')
    setScore({ 'X': 0, 'O': 0 })
  }


  return (
    <Box className="App" >
      <Typography component="h6" className="name" pt={2}>Tic-Tac-Toe</Typography>
      <Grid>

        <Grid>
          {winner === '' && <p className='turn'>Turn - {turn}</p>}
        </Grid>
        <Grid>
          Scores : X - {score.X}
        </Grid>
        <Grid>
          O - {score.O}
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ width: 200 }} >
        {Object.keys(boxes).map((box, index) => {
          return (
            <Grid key={index} size={4}  >
              <Button onClick={() => handleGame(index)} sx={{ height: 40 }} variant="outlined" disabled={winner === '' ? false : true}>{boxes[box]}</Button>
            </Grid>
          )
        })}
      </Grid>
      <Grid>
        {error !== '' && <Grid color='red' fontSize={10}>{error}</Grid>}
        {winner !== '' && <Grid color='green'>Winner is: {winner}</Grid>}
        {winner !== '' && <Grid color='blue'>Score : {score[winner]}</Grid>}
        {winner === '' && score['X'] + score['O'] === 9 && <Grid>It's a Draw</Grid>}
      </Grid>
      <Button onClick={handleReset} sx={{ height: 40, bottom: 10 }} variant="outlined">RESET</Button>
    </Box>
  )
}

export default App