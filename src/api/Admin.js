import {ENV} from '../utils/constants';
import axios from "axios";
import { useEffect, useState } from "react";
const { BASE_PATH, API_ROUTES } = ENV;
const CONTENT_TYPE_JSON = "application/json";


export const GetAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = `${BASE_PATH}/${API_ROUTES.ADMIN}/me`;
      console.log(url);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};

export const AdminName = () => {

  const adminData = GetAdmin(); 

  const admin = adminData.length > 0 ? adminData[0] : "";

  const fullName = admin.name + admin.lastname
  return fullName;
}

export const GetUsers = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const url = `${BASE_PATH}/${API_ROUTES.USERS}`;
        console.log("url get users -> " + url);
        const response = await axios.get(url);
        setUsers(response.data);
      } catch(error){
        console.error(error);
      }
    };
    fetchData()
  }, []);
  return Users;
};

export const toggleUserRole = async (userId, currentActiveStatus, accessToken, users) => {
  const accessTokenString = accessToken;
  console.log("USERS EN EL TOGGLEUSERROLE",currentActiveStatus);
  console.log("accessTokenString en admin -> " + accessTokenString);
  try {
      const url = `${BASE_PATH}/${API_ROUTES.UPDATE}${userId}`;
      console.log("url patch users -> " + url);

      // Enviar solo la información necesaria para la actualización (en este caso, el estado activo)
      const response = await axios.patch(
          url,
          { active: !currentActiveStatus }, // Invertir el estado de activación/desactivación
          {
              headers: {
                  "Content-Type": CONTENT_TYPE_JSON,
                  Authorization: `Bearer ${accessTokenString}`,
              },
          }
      );

      console.log("Respuesta del toggle después del PATCH -> ", response.data);

      // Actualizar el estado local solo del usuario que ha cambiado
      const updatedUsers = users.map(user =>
              user._id === userId ? { ...user, active: !currentActiveStatus } : user

      );

      console.log("Usuarios actualizados después del toggle -> ", updatedUsers);
  } catch (error) {
      console.error("Error al enviar la petición: ", error);

      // Mejora el manejo de errores imprimiendo detalles específicos
      if (error.response) {
        console.error("Respuesta de error del servidor:", error.response.data);
      }
  }
};   