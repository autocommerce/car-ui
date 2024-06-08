import { CustomDataprovider } from "./type";
import { get, post } from "./utils";

type Image ={
    id: string;
    name: string;
}

export const imageProvider: CustomDataprovider<Image> = {
    getList: ()=>{
        return get<Image[]>('images').then(response => response.data);
    },
    getOne: (id)=>{
        return get<Image>(`images/${id}`).then(response => response.data);
    },
    create: (payload)=>{
        return post<Image>('images', payload).then(response => response.data);
    },
    update:(payload)=>{
        return post<Image>('images', payload).then(response => response.data);
    },
    delete: (id)=>{
        return get<Image>(`cars/${id}`).then(response => response.data);
    }
}