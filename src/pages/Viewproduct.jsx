import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Viewproduct() {
    const[product, setProduct] = useState();
    const {id} = useParams();
    console.log(id);

    const viewproduct = async() => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        const prod = response.data.products;
        setProduct(prod)
    }
    
    useEffect(()=>{
      viewproduct()
    },[id])
  return (
    <>
        <div>ViewProduct</div>
    </>
    
  )
}
