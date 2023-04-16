import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom"
import Last from './components/last/Last';
import MainLayouts from './components/layouts/MainLayouts';
import Login from './components/Login/Login';
import Register from './components/resgister/Register';
import Header from './components/header/Header';
import Populare from './components/populare/Populare';
import Archive from './components/archive/Archive';
import SinglePost from './components/singlePost/SinglePost';


const App = () => {
    return (

        <MainLayouts>

            <Routes>
                <Route path='/' exact  element={<><Last /></>} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<><Login /></>} />
                <Route path='/archive' element={<Archive />} />
                <Route path='/singlepost' element={<SinglePost />} />







            </Routes>


        </MainLayouts>

    );
}

export default App;