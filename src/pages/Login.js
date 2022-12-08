import dbService from "../services/dbService";

export default function Login(){
    const loginSubmit = (event)=>{
        event.preventDefault();
        let loginFormData = new FormData(event.target);
        dbService.loginUser(loginFormData)
        .then(res=>{console.log(res.data)})
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