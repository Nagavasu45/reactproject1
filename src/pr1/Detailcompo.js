import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Store } from './Datacompo'

const Detailcompo = () => {
    const id=useParams().id
    console.log(id)
    const nav=useNavigate()
    const [data1]=useContext(Store)
    console.log(data1)
    
  return (
    <div>
        <h1>This id Detail component</h1>
        {data1.filter((data2)=>data2.id===parseInt(id)).map((item,index)=>{
            
            return(
                <>
                <h1>{item.heading}</h1>
                <img src={item.imgstore} alt='not loaded' style={{width:'300px'}}/>
                <p>{item.details}</p>
                <p>{item.indetails}</p>
                <button onClick={()=>nav(-1)}>Back</button>
                </>
            )
        })}
        
      
    </div>
  )
}

export default Detailcompo
