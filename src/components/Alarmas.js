import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Alarmas = () => {
    const [descripcion, setDescripcion] = useState("");

const handleEnviarAlarma = async () => {
    try {
        const response = await axios.post(
            "http://localhost:3001/intermedio/alarmas",
            {
                descripcion_alerta: descripcion,
            }
        );
        setDescripcion("");
        alert("La alarma ha sido enviada correctamente");
    } catch (error) {
        console.error("Error al enviar la alarma:", error);
        alert("Error al enviar la alarma");
    }
};


    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <Link
                    to="/Menu/intermedio"
                    style={{
                        textDecoration: "none",
                        marginRight: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#004d40", // Color verde oscuro
                            color: "white", // Texto en blanco
                            "&:hover": {
                                backgroundColor: "#35BC75", // Cambio de color en hover
                            },
                        }}
                    >
                        Atrás
                    </Button>
                </Link>
                <TextField
                    label="Descripción de la alarma"
                    variant="outlined"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    fullWidth
                />
            </div>
            <Button
                variant="contained"
                onClick={handleEnviarAlarma}
                style={{
                    backgroundColor: "#004d40", // Color verde oscuro
                    color: "white", // Texto en blanco
                    padding: "5px 10px", // Espaciado interno
                    fontSize: "14px", // Tamaño de fuente
                    "&:hover": {
                        backgroundColor: "#1976d2", // Cambio de color en hover
                    },
                }}
            >
                Enviar Alarma
            </Button>
        </div>
    );
};

export default Alarmas;
