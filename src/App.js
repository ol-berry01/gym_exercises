import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './style.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  return (
    <Box
    width="400"
    m="auto"
    sx={{ width:{ xl: '1440px' } }}>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/exercise/:id" element={ <ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App