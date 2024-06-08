import { DataProvider } from 'react-admin';
import { carProvider } from './carProvider';
import { CustomDataprovider } from './type';
import { userProvider } from './userProvider';
import { imageProvider } from './imageProvider';
import { appointmentProvider } from './appointmentProvider';


const getProvider = (resource: string): CustomDataprovider<any>=>{
    switch (resource){
        case "cars": 
            return carProvider;
        case "users":
            return userProvider;
        case "images":
            return imageProvider;
        case "appointments":
            return appointmentProvider;    
        default:
            throw new Error("Unknown resources");
    }
}

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const {pagination, sort, filter, meta } = params;
        const response = await getProvider(resource).getList(pagination.page, pagination.perPage, filter, sort, meta);
        return {
            data: response,
            total: response.length
        }
    },
    getOne: async (resource, params) => {
        const {id, meta}= params;
        const response = await getProvider(resource).getOne(id as string, meta);
        return {
            data: response
        }
    },
    create: async (resource, params) => {
        const {data: payload, meta}= params;
        const response = await getProvider(resource).create(payload, meta);
        return {
            data: response
        }
    },
    update: async (resource, params) => {
        const {data: payload, meta}= params;
        const response = await getProvider(resource).update(payload, meta);
        return {
            data: response
        }
    },
    delete: async (resource, params) => {
        const {id, meta}= params;
        const response = await getProvider(resource).delete(id as string, meta);
        return {
            data: response
        }
    },
    deleteMany: ()=>{
        throw new Error("Not implemented");
    },
    getMany: ()=>{
        throw new Error("Not implemented");
    },
    getManyReference: ()=>{
        throw new Error("Not implemented");
    },
    updateMany: ()=>{
        throw new Error("Not implemented");
    },
};

export default dataProvider;