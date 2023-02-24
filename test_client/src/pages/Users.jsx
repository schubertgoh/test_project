import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';

function Users() {
    return (
        <ProSidebarProvider>
            <Navbar/>
        </ProSidebarProvider>
    );
}

export default Users;