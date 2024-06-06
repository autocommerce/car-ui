import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    EditProps
} from 'react-admin';

const CarEdit: React.FC<EditProps> = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
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
            <TextInput disabled source="createDateTime" />
            <TextInput source="idImage" />
        </SimpleForm>
    </Edit>
);

export default CarEdit;
