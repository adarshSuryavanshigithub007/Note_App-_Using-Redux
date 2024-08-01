import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarComponent from '../../layout/NavbarComponent';
import Login from '../Login';
import Register from '../Register';
import Home from '../../screens/Home';
import AddBooks from '../../screens/AddBooks';
import AllBooks from '../../screens/AllBooks';


const RoutesComponents = () => {
    // localStorage.getite
    const Token = localStorage.getItem('token');
    console.log(Token)
    if (Token === null) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path='/register' Component={Register} />
                </Routes>
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/addbook" Component={AddBooks} />
                <Route path="/allbooks" Component={AllBooks} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents