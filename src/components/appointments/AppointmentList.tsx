import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    SelectField,
    EditButton,
    Edit,
    SimpleForm,
    SelectInput
} from 'react-admin';

const StatusChoices = [
    { id: 'confirm', name: 'Confirm' },
    { id: 'reject', name: 'Reject' },
    { id: 'archive', name: 'Archive' }
];

const AppointmentList: React.FC = (props: any) => (
    <List {...props}>
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
