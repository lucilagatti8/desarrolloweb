import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Tablas = () => {
    const [data, setData] = useState([]);

    const columns = [
        {
            name: "Codigo usuario",
            selector: (row) => row.id_usuario,
        },
        {
            name: "Usuario",
            selector: (row) => row.nombre_usuario,
        },
        {
            name: "Contraseña",
            selector: (row) => row.contraseña,
        },
        {
            name: "Nombre",
            selector: (row) => row.nombre_persona,
        },
        {
            name: "Apellido",
            selector: (row) => row.apellido,
        },
        {
            name: "DNI",
            selector: (row) => row.dni,
        },
        {
            name: "Genero",
            selector: (row) => row.id_genero,
        },
        {
            name: "Telefono",
            selector: (row) => row.telefono,
        },
        {
            name: "Jerarquia",
            selector: (row) => row.id_jerarquia,
        },
        {
            name: "Estado",
            selector: (row) => (row.id_estado ? "Activo" : "Inactivo"),
        },
    ];

    useEffect(() => {
        axiosTabla();
    }, []);

    async function axiosTabla() {
        try {
            const response = await axios.get(
                "http://localhost:3001/reportes/usuarios"
            );
            const usuarios = await response.data.user;
            setData(usuarios);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <DataTable
                title="Usuarios"
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
                component={Link}
                to="/menu/consultas"
            >
                Atrás
            </Button>
        </div>
    );
};

export default Tablas;
