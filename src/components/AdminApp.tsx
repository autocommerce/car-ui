'use client';
import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import authProvider from '@/providers/authProvider';
import CustomLoginPage from '../app/login/page';
import dataProvider from '@/providers/dataProvider';

const AdminApp: React.FC = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
    >
        
        <Resource name="users" list={ListGuesser} />
        <Resource name="cars" list={ListGuesser} edit={EditGuesser} />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    </Admin>
);

export default AdminApp;
