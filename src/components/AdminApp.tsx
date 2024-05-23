// admin/index.js
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" />
        <Resource name="comments" />
    </Admin>
);

export default App;
