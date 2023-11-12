import React from "react";
import "./Login.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { Auth } from "../../api/auth";
import { useState } from "react";

const authController = new Auth();

export const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState  ({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const onFinish = async () => {
    console.log("Received values of form: ", formData);
    try {
      setError("");
      const response = await authController.login(formData);
      authController.setAccessToken(response.access);
      login(response);
      window.location.href = "/admin/";
      console.log(response);
    } catch (error) {
      setError("Error en el servidor con validación de formato de evolución");
    }
  };
  return (
    <div className="login">
      <div className="login-mask">
        <div>
          <label className="login-label">Inicio Sesión</label>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="info">
            <TextField
              required
              id="outlined-password-input"
              label="Correo"
              autoComplete=""
              className="input"
              onChange={(e) => handleInputChange("email", e.target.value)}
              
            />
            <TextField
              required
              id="outlined-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              className="input"
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>
        </Box>
        <div className="btn-div-login">
          <Button variant="outlined" className="btn-login" onClick={onFinish}>
            Iniciar Sesión
          </Button>
        </div>
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      <Footer className="Footer" />
    </div>
  );
};
