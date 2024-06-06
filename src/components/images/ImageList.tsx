import React from 'react';
import { List, Datagrid, TextField, ListProps } from 'react-admin';

const ImageList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="url" />
        </Datagrid>
    </List>
);

export default ImageList;
