import React from 'react'
import { Divider, Drawer, ListItemButton, ListItemIcon } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Container } from '@mui/system';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import imagenMuni from '../assets/img/logo_oficial.png';
import { Outlet, Link, useLocation } from "react-router-dom";
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useEffect, useState} from 'react';

const drawerWidth = 240;


const Menu = () => {

  
  const [url, setUrl] = useState([]);
  const location =useLocation();

  const guardarRuta =() =>{
    const urlActual = location.pathname;
    setUrl(urlActual);
  }

  useEffect(()=>{
    guardarRuta();

  }, []);
 
const blackTextStyle = { color: "black" };


 
  return (
      <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
              position="fixed"
              sx={{
                  width: `calc(100% - ${drawerWidth}px)`,
                  ml: `${drawerWidth}px`,
                  backgroundColor: "#35BC75",
              }}
          >
              <Toolbar>
                  <Typography
                      variant="h4"
                      noWrap
                      component="div"
                      style={{ flex: 1, textAlign: "center" }}
                  >
                      Servicios públicos
                  </Typography>
              </Toolbar>
          </AppBar>

          <Drawer
              sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box",
                      backgroundColor: "#c9d3ce",
                  },
              }}
              variant="permanent"
              anchor="left"
          >
              <Toolbar
                  sx={{
                      backgroundColor: "white",
                  }}
              >
                  <img src={imagenMuni} alt="" />
              </Toolbar>
              <Divider />
              <List
                  component="nav"
                  sx={{
                      margin: 5,
                  }}
              >
                  <Link style={{ textDecoration: "none" }} to={url}>
                      <ListItem disablePadding>
                          <ListItemButton>
                              <ListItemIcon>
                                  <AssignmentIcon />
                                  <ListItemText
                                      primary="Operaciones"
                                      primaryTypographyProps={{
                                          style: blackTextStyle,
                                      }}
                                  />
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/">
                      <ListItem disablePadding>
                          <ListItemButton>
                              <ListItemIcon>
                                  <LogoutIcon />
                                  <ListItemText
                                      primary="Cerrar sesión"
                                      primaryTypographyProps={{
                                          style: blackTextStyle,
                                      }}
                                  />
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                  </Link>
              </List>
          </Drawer>

          <Box
              component="main"
              sx={{
                  flexGrow: 1,
                  bgcolor: "background.default",
                  p: 1,
                  width: 300,
              }}
          >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <Grid container spacing={3}>
                      {/* Chart */}
                      <Grid item xs={12} md={8} lg={12}>
                          <Paper
                              sx={{
                                  p: 2,
                                  display: "flex",
                                  flexDirection: "column",
                              }}
                          >
                              <Outlet />
                          </Paper>
                      </Grid>
                  </Grid>
              </Container>
          </Box>
      </Box>
  );
}

export default Menu
