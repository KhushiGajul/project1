import React, {useEffect, useContext} from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const {userInfoDetails} = useContext(UserInfoContext);

    useEffect(()=>{
        console.log("inside logout")
        userInfoDetails();
        navigate("/")
    },[])

    return(
        <>
        
        </>
    )
}
export default Logout;
