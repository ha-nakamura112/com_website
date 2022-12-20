import dbService from "../services/dbService";
import {useState,useEffect} from "react";

export default function Login(){
    const[data,setRes] = useState([]);
    
    const loginSubmit = (event)=>{
        event.preventDefault();
        let loginFormData = new FormData(event.target);
        dbService.loginUser(loginFormData)
        .then(res=>{
            setRes(res.data);
            sessionStorage.setItem("sid",res.data[0].email);
            console.log(res.data[0].email);
        })
        .catch(err=>{console.log(err)});
    }
    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={(event)=>loginSubmit(event)}>
                <input type="email" name="user" placeholder="Write your username"/>
                <input type="password" name="pass" placeholder="Write your password"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}