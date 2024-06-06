import React from 'react';
import { List, Datagrid, TextField, Filter, TextInput } from 'react-admin';

const ImageFilter: React.FC = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const ImageList: React.FC = (props: any) => (
    <List filters={<ImageFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="url" />
        </Datagrid>
    </List>
);

export default ImageList;
