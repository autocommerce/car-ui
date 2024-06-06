import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps } from 'react-admin';

const ImageEdit: React.FC<EditProps> = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);

export default ImageEdit;
