import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const[prod,Setprod]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
    .then((response)=>{
        console.log(response.data.products)
        Setprod(response.data.products)
    })
    .catch((err)=>{
        console.log(err)
    })
    },[]);
    
  return (
    <>
    <div >
        <h1>Products</h1>
        <div classNameName=''>
             {prod.map((pd)=>(
            <div key={pd.id} >
                <img src={pd.images} atl="img" classNameName='w-25'/>
                <h3>{pd.title}</h3>
                <h5>{pd.category}</h5>
                <p>{pd.description}</p>
            </div>
    ))}
        </div>
   
    </div>
    </>
  )
}

export default Product