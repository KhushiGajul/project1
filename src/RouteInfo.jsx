export const  CommonLink = [
    {
        linkname:"Home",
        linkurl:"/"
    },
    {
        linkname:"Contact",
        linkurl:"contact"
    },
    {
        linkname:"About",
        linkurl:"about"
    }
]

export const LoggedLink = [
    {
        linkname:"Logout",
        linkurl:"logout"
    }
]

export const GuestLink =[
    {
        linkname:"Register",
        linkurl:"register"
    },
    {
        linkname:"Login",
        linkurl:"login"
    }
]

export const UserLink = [
    ...CommonLink,
    ...LoggedLink,
    {
        linkname:"Profile",
        linkurl:"/"
    },
    {
        linkname:"OrderDetails",
        linkurl:"/"
    },
    {
        linkname:"Cart",
        linkurl:"/"
    }
]

export const AdminLinks = [
    ...CommonLink,
    {
        linkname:"Add products",
        linkurl:"/"
    },
    {
        linkname:"Orders",
        linkurl:"/"
    },
    ...LoggedLink
]