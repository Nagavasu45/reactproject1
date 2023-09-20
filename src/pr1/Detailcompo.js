import React, { useContext } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { Store } from './Datacompo'
// import icons.PNG from "./images"


const Detailcompo = () => {
    const id=useParams().id
    console.log(id)
    const nav=useNavigate()
    const [data1]=useContext(Store)
    console.log(data1)
    
  return (
    <div>
      {/* <div className='cover'> </div> */}
        {/* <h1>This id Detail component</h1> */}
        {data1.filter((data2)=>data2.id===parseInt(id)).map((item,index)=>{
            
            return(
                <>
                
                <div >
                  <div className='d1'><h4>{item.heading}</h4></div>
                  
                  <img className='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphnUlWs6OH3DhQPqyLiRmeQCXuQmq9dOC_A&usqp=CAU' alt='not loaded'/>
                  {/* <span className='profilename'>G.Nagavasu</span> */}
                  <img className='icons' src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt='not loaded'/>
                <img className='icons' src='https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png' alt='not loaded'/>
                <img className='icons' src='data:image/png;base64,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' alt='not loaded'/>
                </div>
                <img src={item.imgstore} alt='not loaded' style={{width:'340px', height:'400px'}}/>
                <div className='d1'><p>{item.details}</p>
                <p>{item.indetaildata}</p>
                </div>
                
                <img className='icons iconsbottom' src='data:image/png;base64,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' alt='not loaded'/>
                <img className='icons' src='https://i.pinimg.com/736x/43/fc/f6/43fcf69c73cc6c54ce595a3baf27f0ac.jpg' alt='not loaded'/>
                
                <div><button onClick={()=>nav(-1)}>Back</button></div>
                <div className='last1'>
                
                {data1.map((item)=>{
                  if(item.id%20===0)

                  return(                    
                    <>
                    
                    <div className='last2'>
                      <h3>{item.name}</h3>
                      <img className='last3' src={item.imgstore}/>
                      <h4>{item.heading}</h4>
                      <div>{item.details}</div>
                    </div>
                    
                    </>
                  )
        })}


                </div>

                
                </>
            )
        })}
        
      
    </div>
  )
}

export default Detailcompo
