'use client';
import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import authProvider from '@/providers/authProvider';
import CustomLoginPage from '../app/login/page';
import dataProvider from '@/providers/dataProvider';
import UserIcon from '@mui/icons-material/Group';
import CarIcon from '@mui/icons-material/DirectionsCar';
import ImageIcon from '@mui/icons-material/Image';
import AppointmentIcon from '@mui/icons-material/Event';

const AdminApp: React.FC = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
    >
        <Resource name="users" list={ListGuesser} icon={UserIcon} />
        <Resource name="cars" list={ListGuesser} edit={EditGuesser} icon={CarIcon} />
        <Resource name="images" list={ListGuesser} edit={EditGuesser} icon={ImageIcon} />
        <Resource name="appointments" list={ListGuesser} edit={EditGuesser} icon={AppointmentIcon} />
    </Admin>
);

export default AdminApp;
