import axios from 'axios';
import { ENV } from '../utils/constants';

const { BASE_PATH, API_ROUTES, JWT } = ENV;

export class Auth {
    baseapi = BASE_PATH;

    register = async (data) => {
        const url = `${BASE_PATH}/${API_ROUTES.REGISTER}`;
        console.log(url);

        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    login = async (data) => {
        const url = `${BASE_PATH}/${API_ROUTES.LOGIN}`;
        console.log(url);

        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error(error);
            console.log("Error en login de auth.js", error);
            throw error;
        }
    };

    getAccessToken = async () => {
        return localStorage.getItem(JWT.ACCESS);
    };

    setAccessToken = (token) => {
        localStorage.setItem(JWT.ACCESS, token);
    };
}
