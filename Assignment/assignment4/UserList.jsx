import React from 'react'
import Data from "./assets/data.json"


const UserList = () => {
  return (
    <>
    <div >
        <h2 >User details</h2>
        <div  >
            {Data.map((D)=>(
                <div key={D.id}>
                    <div>
                        <div >
                            <h3>{D.name}</h3>
                    <p > Age : {D.age}</p>
                    <h5 >Skills</h5>
                    <div >
                        {D.Skills.map((skill,i)=>(
                            <span key={i}>{skill}</span>

                        ))}
                    </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
            ))}
        </div>

    </div>
    </>
  )
}

export default UserList



//   <>
//     <div classNameName='container mt-5' >
//         <h2 classNameName='text-center fw-bold mb-4'>User details</h2>
//         <div classNameName='row' >
//             {Data.map((D)=>(
//                 <div classNameName='col-md-4 mb4' key={D.id}>
//                     <div classNameName="card h-100 shadow-sm">
//                         <div classNameName="card-body">
//                             <h3 classNameName='card-title text-primary'>{D.name}</h3>
//                     <p classNameName='card-text mb-3'> Age : {D.age}</p>
//                     <h5 classNameName='fw-semibold mb-2'>Skills</h5>
//                     <div classNameName='d-flex flex-wrap gap-2'>
//                         {D.Skills.map((skill,i)=>(
//                             <span key={i}>{skill}</span>

//                         ))}
//                     </div>
//                         </div>
                        
//                     </div>
                    
                    
//                 </div>
//             ))}
//         </div>

//     </div>
//     </>