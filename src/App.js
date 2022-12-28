import { BrowserRouter, Routes, Route } from 'react-router-dom';
import dbService from "./services/dbService";
import Nav from './pages/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';
import Admin from './pages/Amin';
import Admin2 from './pages/Admin2';
import { useState,useEffect } from 'react';

export default function App(){
    let [user,SetUser] = useState("");

    const pageLoad = () => {
        let sid = sessionStorage.getItem('sid');
        if(sid != null){
            dbService.getData(sid)
            .then(response=>{
                // console.log(response);
                SetUser(response.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    useEffect(()=>pageLoad(),[]);
    

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
                        <Route path='admindash' element={<Admin2/>} />
                        <Route path='admin' element={<Admin/>} />
                        <Route path='*' element={<Nopage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}