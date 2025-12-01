import { useState } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";

const UserInfoProvider = ({children}) =>{

    const [userInfo, setUserInfo] = useState({
        userid: 0,
        userfname: "Guest",
        userlname: "User",
        useremail: "guest@dummy.com",
        usercontact: "988636485",
        userrole: "guest",
    });

    const userInfoDetails = (userObj) => {
        if(userObj){

            setUserInfo(
                {
                    userid: userObj.id,
                    userfname: userObj.firstName,
                    userlname: userObj.lastName,
                    useremail: userObj.email,
                    usercontact: userObj.phone,
                    userrole: userObj.role,
                }
            )
        }else{
            setUserInfo({
                userid: 0,
        userfname: "Guest",
        userlname: "User",
        useremail: "guest@dummy.com",
        usercontact: "988636485",
        userrole: "guest",
            })
        }
    };

    return(
        <>
            <UserInfoContext.Provider value={{userInfo, userInfoDetails}}>
                {children}
            </UserInfoContext.Provider>
        </>
    )
}
export default UserInfoProvider;