import TextField from "@mui/material/TextField";
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {IconButton, Toolbar } from '@mui/material';
import { useEffect, useState}from 'react';
import Button from "@mui/material/Button";
import axios from 'axios';
import { Link } from "react-router-dom";




const NuevaPLanilla = () => {

  const [listaProblematica, setLista] = useState([]);
  const [listaBarrio, setListaBarrio] = useState([]);
  const [listaMultiple, setListaMultiple] = useState([]);
  const [inputs, setInputs] = useState({
    id_insertar_problematica: '',
    observacion:'',
    id_lista_problematica:'',
    id_foto:'',
    id_geolocalizacion:'',
    id_barrio:''
    
  });

  const [contador, setContador] = useState(0);

  function getLocation(){
    navigator.geolocation.getCurrentPosition(onSuccess);
  }

  function onSuccess(position){
    console.log(position.coords.latitude, position.coords.longitude)
    
  }

  function sumar(){
    setContador(contador + 1)
  }
  function restar(){
    setContador(contador - 1)
  }
  

  const getProblematica = async()=>{
    try{
      const response = await axios.get('http://localhost:3001/reportes/problematica')
      setLista(response.data.Problematica);

    }
       catch (error){
    alert('No se pudo recibir problematicas');
    }
  }
  const getBarrio = async()=>{
    try{
      const response = await axios.get('http://localhost:3001/reportes/barrios')
      setListaBarrio(response.data.barrio);

    }
       catch (error){
    alert('No se pudo recibir problematicas');
    }
  }

  useEffect(()=>{
   getProblematica();
   getBarrio();
  },[])

  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]:[e.target.value],
    }))
  }
  const handleChange2 = (e) =>{
    const {
      target:{value},
    } = e;
    setListaMultiple(
      typeof value === 'string' ? value.split(',') : value,
    )
    console.log(listaMultiple)
  }
    
  
  return (
      <div>
          <Box component="form" sx={{}} noValidate autoComplete="off">
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                  <InputLabel>Barrios</InputLabel>
                  <Select
                      value={inputs.id_barrio}
                      onChange={handleChange}
                      name="id_barrio"
                  >
                      {listaBarrio.map((element) => (
                          <MenuItem
                              key={element.id_barrio}
                              value={element.id_barrio}
                          >
                              {element.nombre_barrio}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                  <InputLabel>Problematicas</InputLabel>
                  <Select
                      value={listaMultiple}
                      multiple
                      onChange={handleChange2}
                      name="id_lista_problematica"
                  >
                      {listaProblematica.map((element) => (
                          <MenuItem
                              key={element.id_lista_problematica}
                              value={element.id_lista_problematica}
                              onClick={getLocation}
                          >
                              {element.nombre_problematica}
                              <Button onClick={sumar}>+</Button>
                              <input placeholder={contador}></input>
                              <Button onClick={restar}>-</Button>
                              <IconButton aria-label="delete" component="label">
                                  <input
                                      hidden
                                      accept="image/*"
                                      multiple
                                      type="file"
                                  />
                                  <AddAPhotoIcon />
                              </IconButton>
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <TextField
                  fullWidth
                  label="Observacion"
                  sx={{ marginTop: "20px" }}
              />

              <Button
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: "#004d40", marginTop: "20px" }}
              >
                  GENERAR NUEVA PLANILLA
              </Button>
              <Button
                  variant="contained"
                  style={{
                      backgroundColor: "#004d40",
                      color: "white",
                      marginTop: "20px",
                      marginLeft: "20px",
                  }}
                  component={Link} // Usar componente Link
                  to="/menu/minimo" // Direcciónar a la página consultas.js
              >
                  Atrás
              </Button>
          </Box>
      </div>
  );

  } 

export default NuevaPLanilla
