import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import styles from '../css/Nav.module.css';

export default function Nav(){
    let [user,SetUser] = useState("");
    return(
        <div className={styles.screen}>
            <SideBar/>
            <section>
                <header>
                    <h1><Link to="/">Tian Tian</Link></h1>
                    <nav>
                        <ul>
                            <li><Link to="buysell">Buy/Sell</Link></li>
                            <li><Link to="community">Community</Link></li>
                            <li><Link to="contact">Contact Us</Link></li>
                            <li><Link to="login">My page</Link></li>
                            <li><Link to="admin">Admin</Link></li>
                        </ul>
                    </nav>
                </header>
                <Outlet/>
            </section>
        </div>
    )
}