import React from 'react';
import { List, Datagrid, TextField, NumberField, ListProps } from 'react-admin';

const CarList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="brand" />
            <TextField source="model" />
            <NumberField source="price" />
            <TextField source="color" />
        </Datagrid>
    </List>
);

export default CarList;
