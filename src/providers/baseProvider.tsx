import { DataProvider } from 'react-admin';

const API_URL = 'http://localhost:8080';

const baseProvider: DataProvider = {
    getList: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}`, {
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data, total: data.length };
    },
    getOne: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data };
    },
    create: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params.data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data };
    },
    update: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params.data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data };
    },
    delete: async (resource, params) => {
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data };
    },
    deleteMany: () => Promise.reject('Not Implemented'),
    getMany: () => Promise.reject('Not Implemented'),
    getManyReference: () => Promise.reject('Not Implemented'),
    updateMany: () => Promise.reject('Not Implemented')
};

export default baseProvider;
