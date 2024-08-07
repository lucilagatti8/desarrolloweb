import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const Problematicas = () => {
    const [data, setData] = useState([]);

    const columns = [
        {
            name: "Codigo problematica",
            selector: (row) => row.id_lista_problematica,
        },
        {
            name: "Problematica",
            selector: (row) => row.nombre_problematica,
        },
    ];

    useEffect(() => {
        axiosTabla();
    }, []);

    async function axiosTabla() {
        const response = await axios.get(
            "http://localhost:3001/reportes/problematica"
        );
        const problematicas = await response.data.Problematica;
        setData(problematicas);
    }

    return (
        <div>
            <DataTable
                title="Problematicas"
                columns={columns}
                data={data}
                pagination
                selectableRows
                selectableRowsComponent={Checkbox}
            />
            {/* Botón "Atrás" */}
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
};

export default Problematicas;
