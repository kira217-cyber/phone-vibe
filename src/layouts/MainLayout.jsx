import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return <>
    <div className='md:container mx-auto'>
    <Navbar></Navbar>
    <div className='min-h-[calc(100vh-122px)]'>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
    
    </>
};

export default MainLayout;