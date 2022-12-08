import dbService from "../services/dbService";

export default function Register(){
    const formSubmit = (event)=>{
        event.preventDefault();
        let regFormData = new FormData(event.target);
        dbService.registerUser(regFormData)
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)});
    }
    return(
        <>
            <h1>Register Page</h1>
            <form onSubmit={(event)=>formSubmit(event)}>
                <input type="email" name="email" placeholder="Your username" />
                <input type="password" name="password" placeholder="Your password" />
                <input type="text" name="firstname" placeholder="Your first name" />
                <input type="text" name="lastname" placeholder="Your last name" />
                <input type="date" name="dob" />
                <input type="radio" id="male" name="gender" value="M" />
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="F" />
                <label for="female">Female</label>
                <input type="radio" id="not" name="gender" value="N" />
                <label for="not">Perfer not to say</label>
                <button type="submit">Submit</button>

            </form>
        </>
    )
}