import * as React from 'react';
import { List, Datagrid, TextField, TextInput, Filter } from 'react-admin';

const UserFilter: React.FC = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const UserList: React.FC = (props: any) => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="email" />
        </Datagrid>
    </List>
);

export default UserList;
