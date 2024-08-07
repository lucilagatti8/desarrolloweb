import React, { useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';




const NuevoUsuario = () => {

    const [saveGenero, setSaveGenero] = useState([]);
    const [saveJerarquia, setSaveJerarquia] = useState([]);

    const [inputs, setInputs] = useState({
      nombre_usuario: '',
      contraseña:'',
      nombre_persona:'',
      apellido:'',
      dni:'',
      telefono:'',
      id_genero:'',
      id_jerarquia:''
      
    });

    
    const getGenero = async()=>{
      try{
        const genero = await axios.get('http://localhost:3001/reportes/generos')
        setSaveGenero(genero.data.genero);


      }
         catch (error){
      alert('No se pudo recibir generos');
      }
    }
    const getJerarquia = async()=>{
      try{
        const jerarquia= await axios.get('http://localhost:3001/reportes/jerarquias');
        setSaveJerarquia(jerarquia.data.jerarquia);
      }
      catch(error){
        alert('No se pudo recibir jerarquias');
      }
    }

    
    const handleChange = (e) =>{
      setInputs((prevState) =>({
        ...prevState,
        [e.target.name]:[e.target.value],
      }))
    
      
    }


    useEffect(()=>{
      getGenero();
      getJerarquia();
    },[])


    const handleSubmit= async(e) =>{


      e.preventDefault();
      console.log(inputs)
      try {
        const response= await axios.post('http://localhost:3001/register', inputs)

        alert('Se generó un nuevo usuario');
      
            
          } catch (error) {
            alert('NOMBRE DE USUARIO O CONTRASEÑA INCORRECTOS');
          }
      }
    


  return (
      <div>
          <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit}
          >
              <TextField
                  label="Nombre de usuario"
                  variant="outlined"
                  type="text"
                  name="nombre_usuario"
                  value={inputs.nombre_usuario}
                  onChange={handleChange}
                  helperText="Campo obligatorio"
                  fullWidth
              ></TextField>
              <TextField
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  name="contraseña"
                  value={inputs.contraseña}
                  onChange={handleChange}
                  helperText="Campo obligatorio"
                  fullWidth
              ></TextField>
              <TextField
                  label="Nombre"
                  variant="outlined"
                  type="text"
                  name="nombre_persona"
                  value={inputs.nombre_persona}
                  onChange={handleChange}
                  helperText="Campo obligatorio"
                  fullWidth
              ></TextField>
              <TextField
                  label="Apellido"
                  variant="outlined"
                  type="text"
                  name="apellido"
                  value={inputs.apellido}
                  onChange={handleChange}
                  helperText="Campo obligatorio"
                  fullWidth
              ></TextField>
              <TextField
                  label="DNI"
                  variant="outlined"
                  type="number"
                  name="dni"
                  value={inputs.dni}
                  onChange={handleChange}
                  helperText="Campo obligatorio"
                  fullWidth
              ></TextField>
              <TextField
                  label="Telefono"
                  variant="outlined"
                  type="number"
                  name="telefono"
                  value={inputs.telefono}
                  onChange={handleChange}
                  helperText="Campo obligatorio"
                  fullWidth
              ></TextField>
              <br></br>
              <FormControl fullWidth>
                  <InputLabel>Genero</InputLabel>
                  <Select
                      value={inputs.id_genero}
                      onChange={handleChange}
                      name="id_genero"
                  >
                      {saveGenero.map((element) => (
                          <MenuItem
                              key={element.id_genero}
                              value={element.id_genero}
                          >
                              {element.nombre_genero}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <br></br>
              <FormControl fullWidth>
                  <InputLabel>Jerarquia</InputLabel>
                  <Select
                      value={inputs.id_jerarquia}
                      onChange={handleChange}
                      name="id_jerarquia"
                  >
                      {saveJerarquia.map((element) => (
                          <MenuItem
                              key={element.id_jerarquia}
                              value={element.id_jerarquia}
                          >
                              {element.nombre_jerarquia}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <Toolbar></Toolbar>
              <Button
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: "#004d40" }}
              >
                  GENERAR NUEVO USUARIO
              </Button>
          </Box>
      </div>
  );
}

export default NuevoUsuario
