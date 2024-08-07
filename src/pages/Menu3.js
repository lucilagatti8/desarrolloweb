import React from 'react'
import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import {Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useState } from "react";

const Menu3 = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box sx={{ display: "flex" }}>
            <Link to="/menu/consultas">
                <IconButton
                    size="large"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: hovered ? "#1976D2" : "#004d40", // Cambia el color de fondo a azul cuando se coloca el cursor sobre el botón
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#1976D2", // Cambia el color de fondo a azul claro cuando se coloca el cursor sobre el botón
                        },
                    }}
                    onMouseEnter={() => setHovered(true)} // Actualiza el estado cuando el cursor entra en el botón
                    onMouseLeave={() => setHovered(false)} // Actualiza el estado cuando el cursor sale del botón
                >
                    <AssignmentIcon />
                    <Typography>Reportes</Typography>
                </IconButton>
            </Link>
        </Box>
    );
};

export default Menu3;
