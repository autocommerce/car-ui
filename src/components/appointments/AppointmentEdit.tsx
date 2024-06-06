import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps } from 'react-admin';

const AppointmentEdit: React.FC<EditProps> = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="date" />
            <TextInput source="time" />
        </SimpleForm>
    </Edit>
);

export default AppointmentEdit;
