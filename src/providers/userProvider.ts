import { CustomDataprovider } from "./type";
import { get, post } from "./utils";

type User ={
    id: string;
    name: string;
}

export const userProvider: CustomDataprovider<User> = {
    getList: ()=>{
        return get<User[]>('users').then(response => response.data);
    },
    getOne: (id)=>{
        return get<User>(`users/${id}`).then(response => response.data);
    },
    create: (payload)=>{
        return post<User>('users', payload).then(response => response.data);
    },
    update:(payload)=>{
        return post<User>('users', payload).then(response => response.data);
    },
    delete: ()=>{
        throw new Error("Not implemented");
    }
}