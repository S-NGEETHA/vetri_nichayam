import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quotes = () => {
    const[quote,Setquote]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/quotes")
        .then((res)=>{
            Setquote(res.data.quotes)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <>
        <div classNameName='row m-3 gap-3'>
            {quote.map((q)=>(
                <div key={q.id} classNameName='col-md-3 border border-3 rounded-2 p-3 '>
                    <h4>"{q.quote}"</h4>
                    <h6>Author : {q.author}</h6>
                </div>
            ))}
        </div>
    </>
  )
}

export default Quotes