import React, { useEffect, useState } from "react";
import "./Register.scss";
import Box from "@mui/material/Box";
import { Footer } from "../../components/Footer/Footer";
import TextField from "@mui/material/TextField";
import { Autocomplete, Button, Checkbox } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { Auth } from "../../api/auth";
import axios from "axios";

const authController = new Auth();

export const Register = () => {
  const [munDep, setMunDep] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState(null);
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.datos.gov.co/resource/xdk5-pm3f.json"
        );
        setMunDep(response.data);
        const uniqueDepartamentos = [
          ...new Set(response.data.map((item) => item.departamento)),
        ];
        setDepartamentos(uniqueDepartamentos);
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
      }
    };
    fetchData();
  }, []);

  const handleDepartamentoChange = (event, value) => {
    setSelectedDepartamento(value);

    // Filtra los municipios según el departamento seleccionado
    const municipios = munDep
      .filter((item) => item.departamento === value)
      .map((item) => item.municipio);
      console.log("ESTE ES EL LOG DE MUNICIPIOS",value);

    setMunicipiosFiltrados(municipios);
  };

  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    document: "",
    document_type: "",
    department: "",
    municipality: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    let processedValue = value;

    // Si el campo es "document_type" y el valor es un objeto, extraer el campo "label"
    if (
      field === "document_type" &&
      typeof value === "object" &&
      value !== null
    ) {
      processedValue = value.label;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: processedValue,
    }));
  };

  const onFinish = async () => {
    console.log("Received values of form: ", formData);
    try {
      setError("");
      const response = await authController.register(formData);
      authController.setAccessToken(response.access);
      signup(response);
      window.location.href = "/admin/";
      console.log(response);
    } catch (error) {
      setError("Error en el servidor con validación de formato de evolución");
    }
    console.log("Di click en login");
    window.open("../Login", "_self");
  };

  const documentTypes = [
    { label: "Cedula" },
    { label: "Pasaporte" },
    { label: "Tarjeta de identidad" },
  ];

  return (
    <div>
      <div className="register">
        <div className="register-mask">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <label className="register-label">Registro</label>
            </div>
            <div className="info">
              <div className="names">
                <TextField
                  required
                  id="outlined-password-input"
                  label="Nombre"
                  autoComplete=""
                  className="input"
                  onChange={(e) =>
                    handleInputChange("firstname", e.target.value)
                  }
                />
                <TextField
                  required
                  id="outlined-password-input"
                  label="Apellido"
                  autoComplete=""
                  className="input"
                  onChange={(e) =>
                    handleInputChange("lastname", e.target.value)
                  }
                />
              </div>
              <div className="email">
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
                  label="Repetir correo"
                  autoComplete=""
                  className="input"
                />
              </div>
              <div className="area">
                <Autocomplete
                  className="combo-box"
                  disablePortal
                  id="combo-box-departamento"
                  options={departamentos}
                  value={selectedDepartamento}
                  onChange={(e, value) => {
                    handleDepartamentoChange(e, value);
                    handleInputChange("department", value);
                  }}
                  sx={{ width: 300, color: "white" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Departamento" />
                  )}
                />
                <Autocomplete
                  className="combo-box"
                  disablePortal
                  id="combo-box-municipio"
                  options={municipiosFiltrados}
                  sx={{ width: 300, color: "white" }}
                  onChange={(e, value) =>
                    handleInputChange("municipality", value)
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Municipio" />
                  )}
                />
              </div>
              <div className="document">
                <Autocomplete
                  className="combo-box"
                  disablePortal
                  id="combo-box-demo"
                  options={documentTypes}
                  sx={{ width: 300, color: "white" }}
                  onChange={(e, value) =>
                    handleInputChange("document_type", value)
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Tipo de documento" />
                  )}
                />
                <TextField
                  required
                  id="outlinded-password-input"
                  label="Documento"
                  autoComplete=""
                  className="input"
                  onChange={(e) =>
                    handleInputChange("document", e.target.value)
                  }
                />
              </div>
              <div className="password">
                <TextField
                  required
                  id="outlined-password-input"
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  className="input"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
                <TextField
                  required
                  id="outlined-password-input"
                  label="Repetir contraseña"
                  type="password"
                  autoComplete="current-password"
                  className="input"
                />
              </div>
              <div className="check-section">
                <Checkbox />
                He leído y aceptado las políticas de privacidad y de datos
              </div>
            </div>

            <div className="btn-div-register">
              <Button
                variant="outlined"
                className="btn-register"
                onClick={onFinish}
              >
                Registrarse
              </Button>
            </div>
          </Box>
        </div>
        <Footer className="Footer" />
      </div>
    </div>
  );
};
