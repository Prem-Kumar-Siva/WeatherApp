import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Toolbar } from '@mui/material'

export default function subappbar() {
  return (
    <Box>
        <AppBar position='static' style={{backgroundColor:'navy'}}>
        <Toolbar>
            <h1>Weather App</h1>
        </Toolbar>
        </AppBar>
    </Box>
  )
}
