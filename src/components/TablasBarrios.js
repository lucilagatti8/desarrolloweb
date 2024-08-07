import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const TablasBarrios = () => {
    const [data, setData] = useState([]);

    const columns = [
        {
            name: "Codigo barrio",
            selector: (row) => row.id_barrio,
        },
        {
            name: "Barrio",
            selector: (row) => row.nombre_barrio,
        },
    ];

    useEffect(() => {
        axiosTabla();
    }, []);

    async function axiosTabla() {
        const response = await axios.get(
            "http://localhost:3001/reportes/barrios"
        );
        const usuarios = await response.data.barrio;
        setData(usuarios);
    }

    return (
        <div>
            <DataTable
                title="Barrios"
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
};

export default TablasBarrios;
