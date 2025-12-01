import React, { Children } from "react";
import { LinksContext } from "../contexts/LinksContext";
import { GuestLink, AdminLinks, UserLink, LoggedLink  } from "../RouteInfo";

const LinkProvider = ({children}) => {

    const getLinkDetails = (role="guest")=>{
        switch(role) {
            case "guest":
                return GuestLink;
                
            case "admin":
                return AdminLinks;
                
            default:
                return UserLink;

        }
    }
    return(
        <>
            <LinksContext.Provider value={{getLinkDetails}}>
                {children}
            </LinksContext.Provider>
        </>
    )
}
export default LinkProvider;