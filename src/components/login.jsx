import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Login = () =>{

    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");  
    const [userData, setUserData] = useState([]);
    const userEmail = useRef(null);
    const userPassword = useRef(null);


    const handleSubmit = () => {
        console.log(userEmail.current.value, userPassword.current.value);
        const validation = userArr.find((u)=>u.username == username && u.password == password)

        if(!validation){
            alert("Not Valid user")
        }else{
            alert("Valid user")
        }
    }
        const userApi = async() => {
         const response = await axios.get("https://dummyjson.com/users");
         //const userData = response.data.users;
         setUserData(response.data.users);
         //console.log(userData);
        

     }
    useEffect(() => {
        userEmail.current.focus();


        userApi();
        


    },[]);
    useEffect(() => {
        console.log(userData);
    }, [userData]);

    
    return(
        
        <>
            <div className=""> 
                <h2>Login Here</h2>
                <form>
                    <input type="email" ref={userEmail} placeholder="email"  /><br />
                    <input type="password" ref={userPassword} placeholder="Password"  /><br />
                    <button type="button" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </>
    );
};
export default Login;   