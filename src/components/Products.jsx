import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {Link} from 'react-router-dom'



const Product = () => {

    const [product, setProduct] = useState([])
    const [searchParam, setSearchParam] = useSearchParams();
    const searchText = searchParam.get("q") || "";
    

    const dummyProduct = async () => {
        let url = "";
        if(!searchText){
            url = "https://dummyjson.com/products";
        } else{
            url = `https://dummyjson.com/products/search?q=${searchText}`
        }
        const response = await axios(url);
        const productDetails = response.data.products;
        setProduct(productDetails)
    }

    useEffect(() => {
        dummyProduct()
    }, [searchText])

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchParam(value ? {q: value} : {});
    };

    

    return (
        <>
        <div className="d-flex justify-content-center align-content-center">
           <input 
            type="text"
            placeholder='search by product name'
            value={searchText} 
            onChange={handleSearch}/>
        </div> 
        <div className='d-flex flex-wrap justify-content-evenly'>
            {
                product.map((items,index)=>(
                    <div key={index}>
                        <div className="card" style={{ width: "18rem" }}>
  <img src={items.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{items.name}</h5>
    <p className="card-text">
      {items.description}
    </p>
    <div>
        <p>{items.price}</p>
        <Link to={`viewproduct/${items.id}`} className='btn btn-outline-primary'>Read More</Link>
    </div>
  </div>
</div>

                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Product;