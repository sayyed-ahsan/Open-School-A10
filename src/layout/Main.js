import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Rejister from '../pages/Login/Rejister';

const Main = () => {
    return (
        <div>
            <Login></Login>
            <Rejister></Rejister>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;