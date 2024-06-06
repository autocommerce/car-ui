import React from 'react';
import { List, Datagrid, TextField, ListProps } from 'react-admin';

const AppointmentList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="date" />
            <TextField source="time" />
        </Datagrid>
    </List>
);

export default AppointmentList;
