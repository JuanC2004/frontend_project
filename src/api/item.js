import axios from 'axios';
import { ENV } from '../utils/constants';


const ITEM = ENV.API_ROUTES.ITEM;
const CONTENT_TYPE_JSON = "application/json";
const MultiPart = "multipart/form-data";

export class Item {
    baseApi = ENV.BASE_PATH;

    async NewItem(data, accessToken){
        const accessTokenString = accessToken;
        console.log("Entro al desactivar item");
        try {
            const response = await axios.post(
                `${ENV.BASE_PATH}/item`,
                data,
                {
                    headers: {
                        "Content-Type": MultiPart,
                        Authorization : `Bearer $(accesTokenString)`,
                    },
                }
            );

            console.log("Nuevo item creado: ",response.data);
            return response.data
        } catch (error) {
            console.log("error al crear el item: ", error);
            console.error(error);
            throw error;
        }
    }

    async modifyItem (data, accessToken, _id){
        const accessTokenString = accessToken;
        for (let pair of data.entries()) {
            const [key, value] = pair;
            console.log(key, value);


            if(value instanceof File) {
                console.log(`${key} - File Object`);
                console.log(`Name: ${value.name}`);
                console.log(`Type: ${value.type}`);
                console.log(`Size: ${value.size} bytes`);
            }
        }
        try{
            const response = await axios.patch(
                `${ENV.BASE_PATH}/item/${_id}`,
                data,
                {
                    headers: {
                        "Content-Type" : CONTENT_TYPE_JSON,
                        Authorization: `Bearer ${accessTokenString}`,
                    },
                }
            );

            console.log("Item modificado: ",response.data);
            return response.data;
        } catch (error) {
            console.log("error al modificar el item: ",error);
            console.error(error);
            throw error;
        }
    }

    async modifyPhoto (data, accessToken, _id){
        const accessTokenString = accessToken;
        console.log("entro al modifyPhoto");
        try {
            const response = await axios.patch(
                `${ENV.BASE_PATH}/item/${_id}`,
                data,
                {
                    headers: {
                        "Content-Type": MultiPart,
                        Authorization: `Bearer ${accessTokenString}`,
                    },
                }
            );

            console.log("item modificado: ", response.data);
            return response.data;
        }catch (error) {
            console.log("error al modificar el item", error);
            console.error(error);
            throw error;
        }
    }
    
}