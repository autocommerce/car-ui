import { DataProvider } from 'react-admin';
import { accountsProvider } from './accountsProvider';
import { User } from './type';
const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        if (resource === 'users') {
            const { data, total } = await accountsProvider.getList();
            return {
                data: data.map((item: any) => ({ ...item, id: item.id })),
                total
            };
        }
        return Promise.reject('Unknown resource');
    },
    getOne: async (resource, params) => {
        if (resource === 'users') {
            const { data } = await accountsProvider.getOne(
                params.id.toString()
            );
            return { data: { ...data, id: data.id } };
        }
        return Promise.reject('Unknown resource');
    },
    create: async (resource, params) => {
        if (resource === 'users') {
            const { data } = await accountsProvider.create(params.data as User);
            return { data: { ...data, id: data.id } };
        }
        return Promise.reject('Unknown resource');
    },
    update: async (resource, params) => {
        if (resource === 'users') {
            const { data } = await accountsProvider.update(
                params.id,
                params.data as User
            );
            return { data: { ...data, id: data.id } };
        }
        return Promise.reject('Unknown resource');
    },
    delete: async (resource, params) => {
        if (resource === 'users') {
            const { data } = await accountsProvider.delete(
                params.id.toString()
            );
            return { data: { ...data, id: data.id } };
        }
        return Promise.reject('Unknown resource');
    },
    deleteMany: () => Promise.reject('Not Implemented'),
    getMany: () => Promise.reject('Not Implemented'),
    getManyReference: () => Promise.reject('Not Implemented'),
    updateMany: () => Promise.reject('Not Implemented')
};

export default dataProvider;
