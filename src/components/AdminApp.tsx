'use client';
import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '@/providers/authProvider';
import CustomLoginPage from '../app/login/page';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminApp: React.FC = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
    >
        <Resource
            name="users"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="name"
        />
        <Resource
            name="posts"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="title"
        />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    </Admin>
);

export default AdminApp;
