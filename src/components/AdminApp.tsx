'use client';
import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, defaultTheme } from 'react-admin';
import { createTheme, PaletteMode, CssBaseline, Button } from '@mui/material';
import authProvider from '@/providers/authProvider';
import CustomLoginPage from '../app/login/page';
import dataProvider from '@/providers/dataProvider';
import UserIcon from '@mui/icons-material/Group';
import CarIcon from '@mui/icons-material/DirectionsCar';
import ImageIcon from '@mui/icons-material/Image';
import AppointmentIcon from '@mui/icons-material/Event';
import CarList from '@/components/cars/CarList';
import CarCreate from '@/components/cars/CarCreate';
import CarEdit from '@/components/cars/CarEdit';
import ImageList from '@/components/images/ImageList';
import ImageCreate from '@/components/images/ImageCreate';
import ImageEdit from '@/components/images/ImageEdit';
import AppointmentList from '@/components/appointments/AppointmentList';
import AppointmentEdit from '@/components/appointments/AppointmentEdit';
import AppointmentCreate from './appointments/AppointmentCreate';

const lightTheme = createTheme(defaultTheme);
const darkTheme = createTheme({ 
    ...defaultTheme, 
    palette: { 
        mode: 'dark' as PaletteMode 
    }
});

const AdminApp: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <CssBaseline />
            <Button onClick={toggleTheme} style={{ position: 'fixed', top: 10, right: 10 }}>
                Toggle Theme
            </Button>
            <Admin
                dataProvider={dataProvider}
                authProvider={authProvider}
                loginPage={CustomLoginPage}
                theme={isDarkMode ? darkTheme : lightTheme}
            >
                <Resource
                    name="users"
                    list={ListGuesser}
                    edit={EditGuesser}
                    icon={UserIcon}
                />
                <Resource
                    name="cars"
                    list={CarList}
                    create={CarCreate}
                    edit={CarEdit}
                    icon={CarIcon}
                />
                <Resource
                    name="images"
                    list={ImageList}
                    create={ImageCreate}
                    edit={ImageEdit}
                    icon={ImageIcon}
                />
                <Resource
                    name="appointments"
                    list={AppointmentList}
                    edit={AppointmentEdit}
                    create={AppointmentCreate}
                    icon={AppointmentIcon}
                />
            </Admin>
        </>
    );
};

export default AdminApp;
