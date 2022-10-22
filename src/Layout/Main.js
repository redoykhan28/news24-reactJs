import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div className='container gx-4'>
            <Header></Header>
            <div className="row">
                <div className="col-lg-2">
                    <LeftNav></LeftNav>
                </div>
                <div className='col-lg-7'>
                    <Outlet></Outlet>
                </div>
                <div className='col-lg-3'>
                    <RightNav></RightNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;