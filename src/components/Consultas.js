import React from 'react'
import { Box, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Consultas = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      
      <Link to ='usuarios' style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={{backgroundColor:'#35BC75'}}>USUARIOS</Button>
      </Link>
      <Toolbar/>
      <Link to ='barrios' style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={{backgroundColor:'#35BC75'}}>Barrios</Button>
      </Link>
      <Toolbar/>
      <Link to ='problematicas' style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={{backgroundColor:'#35BC75'}}>problematicas</Button>
      </Link>
      <Toolbar/>
      <Link to ='planillas' style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={{backgroundColor:'#35BC75'}}>planillas</Button>
      </Link>
      
    </Box>
  )
}

export default Consultas
