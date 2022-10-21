import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav(){
    let [user,SetUser] = useState("");
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {user === "" ? <li><Link to="/login">Login</Link></li> : <li><Link to="/logout">Logout</Link></li>}
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <br/>
            <Outlet/>
        </>
    )
}