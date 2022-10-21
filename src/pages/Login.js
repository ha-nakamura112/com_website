export default function Login(){
    return(
        <>
            <h1>Login Page</h1>
            <form method="POST">
                <input type="email" name="user" placeholder="Write your username"/>
                <input type="password" name="pass" placeholder="Write your password"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}