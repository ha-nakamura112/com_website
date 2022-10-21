import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';
import { useState } from 'react';

export default function App(){
    let [user,SetUser] = useState("");
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav LoggedUser={user}/>}>
                        <Route index element={<Home LoggedUser={user}/>} />
                        <Route path='home' element={<Home/>} />
                        <Route path='login' element={<Login LoggedUser={user}/>} />
                        <Route path='logout' element={<Logout LoggedUser={user}/>} />
                        <Route path='register' element={<Register/>} />
                        <Route path='contact' element={<Contact/>} />
                        <Route path='*' element={<Nopage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}