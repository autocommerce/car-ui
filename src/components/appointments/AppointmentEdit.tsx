import * as React from 'react';
import { Edit, SimpleForm, SelectInput } from 'react-admin';

const StatusChoices = [
    { id: 'confirm', name: 'Confirm' },
    { id: 'reject', name: 'Reject' },
    { id: 'archive', name: 'Archive' }
];

const AppointmentEdit: React.FC = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput source="status" choices={StatusChoices} />
        </SimpleForm>
    </Edit>
);

export default AppointmentEdit;
