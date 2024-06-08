import { CustomDataprovider } from "./type";
import { get, post } from "./utils";

type Car ={
    id: string;
    name: string;
}

export const carProvider: CustomDataprovider<Car> = {
    getList: ()=>{
        return get<Car[]>('cars').then(response => response.data);
    },
    getOne: (id)=>{
        return get<Car>(`cars/${id}`).then(response => response.data);
    },
    create: (payload)=>{
        return post<Car>('cars', payload).then(response => response.data);
    },
    update:(payload)=>{
        return post<Car>('cars', payload).then(response => response.data);
    },
    delete: ()=>{
        throw new Error("Not implemented");
    }
}