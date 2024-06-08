import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    SelectField,
    EditButton,
    Filter,
    TextInput,
    Edit,
    SimpleForm,
    SelectInput
} from 'react-admin';

const AppointmentFilter: React.FC = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const StatusChoices = [
    { id: 'confirm', name: 'Confirm' },
    { id: 'reject', name: 'Reject' },
    { id: 'archive', name: 'Archive' }
];

const AppointmentList: React.FC = (props: any) => (
    <List filters={<AppointmentFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="createDateTime" />
            <TextField source="message" />
            <TextField source="name" />
            <TextField source="firstName" />
            <TextField source="email" />
            <DateField source="appointmentDateTime" />
            <SelectField source="status" choices={StatusChoices} />
            <EditButton />
        </Datagrid>
    </List>
);

export default AppointmentList;
