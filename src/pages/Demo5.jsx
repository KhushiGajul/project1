import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const Demo5 = () => {

    const fetchUsers = async() => {
        const response = await axios.get("https://dummyjson.com/users")
        return response.data;
    }


    const {data, error, isloading} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if(error){
        return(
            <h1>Error!{error.message}</h1>
        )
    }else if(isloading){
        return <h1>Loading</h1>
    }

  return (
    <>
        {
            data.map((u,id)=>{
                <div key={id}>
                    {u.username}
                </div>
            })
        }
    </>
  )
}
export default Demo5;
