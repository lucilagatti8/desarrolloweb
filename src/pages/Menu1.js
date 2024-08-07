import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link } from "react-router-dom";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';



const Menu1 = () => {


 
  return (
      <>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                  to="planilla"
                  style={{ textDecoration: "none", margin: "10px" }}
              >
                  <IconButton
                      size="large"
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "#004d40", // Color de fondo verde oscuro
                          color: "white", // Color del texto blanco
                          margin: "10px", // Margen de 10px alrededor del botón
                          "&:hover": {
                              backgroundColor: "#1976d2", // Cambio de color de fondo a azul oscuro en hover
                          },
                      }}
                  >
                      <InsertDriveFileIcon /> {/* Icono de archivo */}
                      <Typography>Nueva planilla</Typography>
                  </IconButton>
              </Link>
          </Box>
      </>
  );
}

export default Menu1
