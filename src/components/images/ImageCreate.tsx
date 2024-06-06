import React from 'react';
import { Create, SimpleForm, TextInput, CreateProps } from 'react-admin';

const ImageCreate: React.FC<CreateProps> = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);

export default ImageCreate;
