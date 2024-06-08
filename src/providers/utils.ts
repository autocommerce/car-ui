import axios from "axios";
import { getCachedToken } from "./authProvider";

const API_URL = process.env.API_URL!;
export const get = <T> (path: string) =>{
    return axios.get<T>(`${API_URL}/${path}`, {
        headers: {
            Authorization: `Bearer ${getCachedToken()}`
        }
    });
}

export const post = <T> (path: string, payload: any) =>{
    return axios.post<T>(`${API_URL}/${path}`, payload, {
        headers: {
            Authorization: `Bearer ${getCachedToken()}`
        }
    });
}