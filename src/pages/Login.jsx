import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { useContext } from "react";
const Login = () => {

    const [username,setUserName] = useState() //setUserName(Radha)
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const [userArr,setUserArr] = useState([])

    const {userInfoDetails} = useContext(UserInfoContext);

    const userData = async() =>{
        const response = await axios("https://dummyjson.com/users")
        const data = response.data.users
        setUserArr(data)
    }
  
    

    const handleSubmit = () =>{

        const validation = userArr.find((u) => 
            u.username == username && u.password == password
        )

        if(!validation){
            alert("Not valid User")
        }else{
            const result = userArr.find((user) => user.username === username)
            userInfoDetails(result)
            alert("Valid User")
            navigate("/home")
        }

        console.log(username,password);
    }

    useEffect(()=>{
        userData()
    },[])

    useEffect(()=>{
        console.log(userArr);
    },[userArr])

    return (
        <>
            <h1>Welcome to Login page</h1>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleSubmit}>Login</button>
        </>
    )
}
export default Login;