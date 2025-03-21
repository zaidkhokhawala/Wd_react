<<<<<<< HEAD

import React from 'react';
import Childcontext from './Childcontext';
import userContext from './userContext'
function Perentscontext() {
    const user = { name: "Zai", id: 1 };

    return (
        <userContext.Provider value={user}>
            <Childcontext />
        </userContext.Provider>
    );
}

export default Perentscontext;
=======

import React from 'react';
import Childcontext from './Childcontext';
import userContext from './userContext'
function Perentscontext() {
    const user = { name: "Zai", id: 1 };

    return (
        <userContext.Provider value={user}>
            <Childcontext />
        </userContext.Provider>
    );
}

export default Perentscontext;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
