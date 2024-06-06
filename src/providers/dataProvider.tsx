import { DataProvider } from 'react-admin';
import baseProvider from './baseProvider';

const dataProvider: DataProvider = {
    ...baseProvider,
    getList: async (resource, params) => {
        if (
            resource === 'users' ||
            resource === 'cars' ||
            resource === 'images' ||
            resource === 'appointments'
        ) {
            return baseProvider.getList(resource, params);
        }
        return Promise.reject('Unknown resource');
    },
    getOne: async (resource, params) => {
        if (
            resource === 'users' ||
            resource === 'cars' ||
            resource === 'images' ||
            resource === 'appointments'
        ) {
            return baseProvider.getOne(resource, params);
        }
        return Promise.reject('Unknown resource');
    },
    create: async (resource, params) => {
        if (
            resource === 'users' ||
            resource === 'cars' ||
            resource === 'images' ||
            resource === 'appointments'
        ) {
            return baseProvider.create(resource, params);
        }
        return Promise.reject('Unknown resource');
    },
    update: async (resource, params) => {
        if (
            resource === 'users' ||
            resource === 'cars' ||
            resource === 'images' ||
            resource === 'appointments'
        ) {
            return baseProvider.update(resource, params);
        }
        return Promise.reject('Unknown resource');
    },
    delete: async (resource, params) => {
        if (
            resource === 'users' ||
            resource === 'cars' ||
            resource === 'images' ||
            resource === 'appointments'
        ) {
            return baseProvider.delete(resource, params);
        }
        return Promise.reject('Unknown resource');
    }
};

export default dataProvider;
