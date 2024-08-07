
import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';



const FormularioLogin = () => {

const navigate=useNavigate();




const handleSubmit= async(values) =>{
      
  let prueba = []
  console.log(values)
  try {
    const response= await axios.post('http://localhost:3001/login', values)
    prueba = response.data.user;
  
    
    console.log(prueba[0].id_jerarquia);
    if (prueba[0].id_jerarquia === 4){
      navigate('/Menu/minimo');
    } else if(prueba[0].id_jerarquia === 5){
      navigate('/Menu/intermedio');
    } else if(prueba[0].id_jerarquia === 6){
      navigate('/Menu/Alto');
    }
      
        
      } catch (error) {
        alert('NOMBRE DE USUARIO O CONTRASEÑA INCORRECTOS');
      }
  }


const formik = useFormik({
        initialValues: {
          nombre_usuario: "",
          contraseña: "",
        },
        validationSchema: yup.object({
          nombre_usuario: yup.string('Ingrese su nombre de usuario').required('El nombre de usuario es obligatorio'),
          contraseña: yup.string('Ingrese su password').min(6,'Debe contener como mínimo 6 caracteres').required('La password es obligatoria')
        }
        ),
        onSubmit:async (values, {resetForm}) =>  {
         

          await handleSubmit(values);
          
          resetForm();
          
        },
  });


  



  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
        <Stack
         
          sx={{
            width: "25ch",
          }}
          margin="auto"
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            hiddenLabel
            id="nombre_usuario"
            name="nombre_usuario"
            label="Usuario"
            value={formik.values.nombre_usuario}
            onChange={formik.handleChange}
            error={formik.touched.nombre_usuario && Boolean(formik.errors.nombre_usuario)}
            helperText={formik.touched.nombre_usuario && formik.errors.nombre_usuario}
            variant="filled"
          />
          <TextField
            hiddenLabel
            id="contraseña"
            name="contraseña"
            label="Password"
            type='password'
            value={formik.values.contraseña}
            onChange={formik.handleChange}
            error={formik.touched.contraseña && Boolean(formik.errors.contraseña)}
            helperText={formik.touched.contraseña && formik.errors.contraseña}
            variant="filled"
          />
          <Button variant="contained" type="submit"  color="success" >
            INGRESAR
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export default FormularioLogin
