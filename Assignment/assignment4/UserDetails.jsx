import React from 'react'
import Data from "./assets/UserDetails.json"

const UserDetails = () => {
  return (
    <>
    <div classNameName='d-flex flex-wrap'>
        {Data.map((D,i)=>(
          <div key={i} classNameName='border m-2'>
            <img src={D.picture} alt="img" classNameName='border-3 rounded-2 w-75 '/>
            
            <div classNameName='d-flex flex-column '>
              <h3>{D.name.title}{D.name.first}{D.name.last}</h3>
              <p>{D.gender}</p>
              <p>{D.email}</p>
              <p>{D.cell}</p>
              <div>
                <p>Address:{D.location.city}, {D.location.state}, {D.location.country} - {D.location.postcode}</p>
              </div>
            </div>
            

          </div>
        ))}
    </div>
    </>
  )
}

export default UserDetails