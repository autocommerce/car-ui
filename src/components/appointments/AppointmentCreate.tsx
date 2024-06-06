import React from 'react';
import { Create, SimpleForm, TextInput, CreateProps } from 'react-admin';

const AppointmentCreate: React.FC<CreateProps> = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="date" />
            <TextInput source="time" />
        </SimpleForm>
    </Create>
);

export default AppointmentCreate;
