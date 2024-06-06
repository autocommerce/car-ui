import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    CreateProps
} from 'react-admin';

const CarCreate: React.FC<CreateProps> = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="brand" />
            <TextInput source="model" />
            <NumberInput source="price" />
            <TextInput source="color" />
            <TextInput source="motorType" />
            <TextInput source="power" />
            <TextInput source="placeNumber" />
            <TextInput source="status" />
            <TextInput source="type" />
            <TextInput source="idImage" />
        </SimpleForm>
    </Create>
);

export default CarCreate;
