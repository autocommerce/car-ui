import { CustomDataprovider } from "./type";
import { get, post } from "./utils";

type appointment ={
    id: string;
    name: string;
}

export const appointmentProvider: CustomDataprovider<appointment> = {
    getList: ()=>{
        return get<appointment[]>('appointments').then(response => response.data);
    },
    getOne: (id)=>{
        return get<appointment>(`appointments/${id}`).then(response => response.data);
    },
    create: (payload)=>{
        return post<appointment>('appointments', payload).then(response => response.data);
    },
    update:(payload)=>{
        return post<appointment>('appointments', payload).then(response => response.data);
    },
    delete: (id)=>{
        return get<appointment>(`appointments/${id}`).then(response => response.data);
    }
}