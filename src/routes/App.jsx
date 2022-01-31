import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound' 
import RecoveryPassword from '../containers/RecoveryPassword';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import Orders from '../pages/Orders';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import SendEmail from '../pages/SendEmail';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route  path = "/" element={<Home />} />
                        <Route  path = "/login" element={<Login />} />
                        <Route  path = "/Recovery-Password" element={<RecoveryPassword />} />
                        <Route  path = "/New-Password" element={<NewPassword />} />
                        <Route  path = "/signUp" element={<CreateAccount />} />
                        <Route path = "/Orders" element= {<Orders />} />
                        <Route path = "/My-Account" element= {<MyAccount />} />
                        <Route path = "/Checkout" element= {<Checkout />} />
                        <Route path = "/Send-Email" element= {<SendEmail />} />
                        <Route path= "*" element={<NotFound />} />  
                    </Routes>
                </Layout>
        </BrowserRouter>
    );
}

export default App;