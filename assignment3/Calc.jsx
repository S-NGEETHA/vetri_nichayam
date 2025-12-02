import React, { useState } from 'react'

const Calc = () => {
    const[result,setresult]=useState("")
    const handle=(e)=>{
        setresult(result.concat(e.target.name))
    }
    const res=()=>{
        setresult(eval(result).toString())
    }
    const clear=()=>{
        setresult("")
    }
  return (
    <div classNameName='cont'>
        <input type='text' id='result' title="Input field for result" value={result} onChange={handle}/><br></br>
        <button name='7' onClick={handle}>7</button>
        <button name='8' onClick={handle}>8</button>
        <button name='9' onClick={handle}>9</button>
        <button name='*' onClick={handle}>*</button><br></br>
        <button name='4' onClick={handle}>4</button>
        <button name='5' onClick={handle}>5</button>
        <button name='6' onClick={handle}>6</button>
        <button name='-' onClick={handle}>-</button><br></br>
        <button name='1' onClick={handle}>1</button>
        <button name='2' onClick={handle}>2</button>
        <button name='3' onClick={handle}>3</button>
        <button name='+' onClick={handle}>+</button><br></br>
        <button name='/' onClick={handle}>/</button>
        <button name='0' onClick={handle}>0</button>
        <button  onClick={res}>=</button>
        <button  onClick={clear}>AC</button>

        
    </div>
  )
}

export default Calc