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

export const toggleUserRole = async (userId, currentActiveStatus, accesToken, users) => {
  const accessTokenString = accesToken;
  console.log("accesTokenString en admin -> " + accessTokenString);
  try{
    const url = `${BASE_PATH}/${API_ROUTES.UPDATE}${userId}`;
    console.log("url patch users -> " + url);

    const response = await axios.patch(
      url,
      { active: !currentActiveStatus },
      {
        headers: {
          "Content-Type": CONTENT_TYPE_JSON,
          Authorization: `Bearer ${accessTokenString}`,
        },
      }
    );

    console.log("Respuesta del toggle después del PATCH -> ", response.data);

    users.map(user =>
            user._id === userId ? { ...user, active: !currentActiveStatus } : user
            );
  } catch (error) {
    console.error(error);
  }
};