import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Importa el icono de usuario


const Menu2 = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            {/* Centra los botones horizontalmente */}
            <Link
                to="/menu/consultas"
                style={{ textDecoration: "none", margin: "10px" }}
            >
                <IconButton
                    size="large"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#004d40", // Establece el color de fondo como verde oscuro
                        color: "white", // Establece el color del texto como blanco
                        margin: "10px", // Agrega margen para separar los botones
                        "&:hover": {
                            // Cambia el color cuando se pasa el cursor sobre el botón
                            backgroundColor: "#35BC75",
                        },
                    }}
                >
                    <AssignmentIcon />
                    <Typography>Reportes</Typography>
                </IconButton>
            </Link>
            <Link
                to="alarmas"
                style={{ textDecoration: "none", margin: "10px" }}
            >
                <IconButton
                    size="large"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#004d40", // Establece el color de fondo como verde oscuro
                        color: "white", // Establece el color del texto como blanco
                        margin: "10px", // Agrega margen para separar los botones
                        "&:hover": {
                            // Cambia el color cuando se pasa el cursor sobre el botón
                            backgroundColor: "#ca3232",
                        },
                    }}
                >
                    <AddAlertIcon />
                    <Typography>Nueva Alarma</Typography>
                </IconButton>
            </Link>
            <Link
                to="nuevoUsuario"
                style={{ textDecoration: "none", margin: "10px" }}
            >
                <IconButton
                    size="large"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#004d40", // Establece el color de fondo como verde oscuro
                        color: "white", // Establece el color del texto como blanco
                        margin: "10px", // Agrega margen para separar los botones
                        "&:hover": {
                            // Cambia el color cuando se pasa el cursor sobre el botón
                            backgroundColor: "#1976d2",
                        },
                    }}
                >
                    <PersonAddIcon /> {/* Cambia a PersonAddIcon */}
                    <Typography>Generar nuevo usuario</Typography>
                </IconButton>
            </Link>
        </Box>
    );
};

export default Menu2;
