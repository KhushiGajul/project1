import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import Product from "./Products";


const Viewproduct = () => {
    const [productList, setProductList] = useState(null);
    const { id } = useParams()
    console.log(id);

    const product = async() => {
        const response = await axios(`https://dummyjson.com/products/${id}`);
        const list = response.data;
        setProductList(list)
    }

    useEffect(() => {
        product()
    },[id])

    return(
        <>
        
        </>
    )

}
    