import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import styles from '../css/Root.module.css';

export default function Nav(){
    let [user,SetUser] = useState("");
    return(
        <div className={styles.screen}>
            {/* <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {user === "" ? <li><Link to="/login">Login</Link></li> : <li><Link to="/logout">Logout</Link></li>}
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <br/> */}
            <SideBar/>
            <Outlet/>
        </div>
    )
}