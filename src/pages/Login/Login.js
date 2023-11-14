import React, { useContext, useState, useEffect } from "react";
import "./Login.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { Auth } from "../../api/auth";
import { AuthContext } from "../../context";

const authController = new Auth();

export const Login = () => {
  const { user } = useContext(AuthContext);
  const { login } = useAuth();
  const [formData, setFormData] = useState  ({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() =>{
    console.log("usuario depsues de ser seteado",user);


    if (user && user.role === "admin"){
      window.location.href = '/admin/Home';
    }else if (user && user.role === "user" && user.active === true){
      window.location.href = 'user/Home';
    }
  }, [user]);

  const onFinish = async () => {
    console.log("Received values of form: ", formData);
    try {
      setError("");
      const response = await authController.login(formData);
      console.log("response del login", response);
      if(response.active === false) {
        window.location.href = '/nonVerified';
      }
      authController.setAccessToken(response.access);
      login(response);
  } catch (error){
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
