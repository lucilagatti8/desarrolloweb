import React from 'react'
import DataTable from 'react-data-table-component';
import {useState, useEffect} from 'react';
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

const Planillas = () => {
    const[data,setData]=useState([]);
   

    
    const columns = [
        {
        name:'Codigo planilla',
        selector:(row) => row.id_planilla

        },
        {
            
        name:'Fecha',
        selector:(row) => row.fecha_planilla   
        },
        {
        name:'ID Usuario encargado de la planilla',
        selector:(row) => row.id_usuario
    
        },
        {
        name:'ID Problematicas',
        selector:(row) => row.id_insertar_problematica
    
        }
        
    ];

   

    useEffect(()=>{
      axiosTabla(); 
      
  
    }, []);

    async function axiosTabla() {
      const response= await axios.get('http://localhost:3001/reportes/planillas')
      const problematicas = await response.data.planilla;
      setData(problematicas);
    }
    
  return (
      <div>
          <DataTable
              title="Planillas"
              columns={columns}
              data={data}
              pagination
              selectableRows
              selectableRowsComponent={Checkbox}
          />

          <Button
              variant="contained"
              style={{
                  backgroundColor: "#004d40",
                  color: "white",
                  marginTop: "20px",
              }}
              component={Link} // Usar componente Link
              to="/menu/consultas" // Direcciónar a la página consultas.js
          >
              Atrás
          </Button>
      </div>
  );

}

export default Planillas
