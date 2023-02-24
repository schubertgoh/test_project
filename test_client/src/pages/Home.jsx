import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';

function Home() {

    return (
        <div>
        <ProSidebarProvider>
            <Navbar/>
        </ProSidebarProvider>
        </div>
    );

}

export default Home;