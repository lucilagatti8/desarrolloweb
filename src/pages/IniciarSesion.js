import React from 'react'
import FormularioLogin from '../components/FormularioLogin'
import Grid from '@mui/material/Grid';
import imagenMuni from '../assets/img/logo_oficial.png';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const IniciarSesion = () => {
  return (
    <>
    <Box sx={{
          margin:10
        }}>
        <Grid
        container
        direction="row"
        justifyContent="center"
        aligitems="center"
        >
        <Box sx={{backgroundColor:'rgba(255, 255, 255, 0.8)',
            width:500,
            height:400,
            borderRadius:5,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'}}>
            <Typography variant='h4'sx={{textAlign: "center",
          }}>
                SERVICIOS PUBLICOS
                <img src={imagenMuni} alt=''/>
            </Typography>
            <FormularioLogin/>
          </Box>
        </Grid>
    </Box>
    </>
  )
}

export default IniciarSesion
