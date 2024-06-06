import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Filter,
    TextInput
} from 'react-admin';

const CarFilter: React.FC = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const CarList: React.FC = (props: any) => (
    <List filters={<CarFilter />} {...props}>
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
