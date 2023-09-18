import React, { useContext } from "react"
import Datacompo, { Store } from "./Datacompo"
import "./sty.css"




function Bollywood(){
    const [data1]=useContext(Store)
    
    
    console.log(data1)
    return(       

       
    <>
    <div className="mainb">
    <div className="b1">
       <div className="b3">Bollywood</div> 
       {data1.map((item)=>{
        if(item.level==="medium" && item.catageory==="bolly")
            return(
        <>
                <div className="b4">
                <img className="b5" src={item.imgstore} alt="no loaded"/>
                
                
                <div className="b6">
                    <div className="b7">{item.heading}</div>
                    <div className="bcolor">{item.details}</div>
                </div>
                </div>
                
                </>
                
        )
       })}

    </div>
    <div className="b2">
    <div className="b8">
        Top Posts
    </div>
    {data1.map((item)=>{
        if(item.level==="maintop1")
        return(
    <>
    <div className="b13">
        <img className=" topimg" src={item.imgstore}/>
        <div className="b11">{item.heading}

        </div>
    </div>
    </>)
        

    })}
    
    
    {data1.map((item)=>{
        if(item.level==="top" && item.catageory==="bolly")
            return(
                
                <>
                <div className="b9">
                    <img className="b10" src={item.imgstore} alt="not loaded"/>
                
                <div className="b11">
                    {item.heading}

                </div>
                {/* <div className="b12">
                    1
                </div> */}
                </div>
                
                
                </>
                
            )
        })}
    <div className="bollyads">
        <div className="ads1">
        adevertizement
        </div>

    </div>

</div>

</div>
    
        
    
    </>

       
    )

}
export default Bollywood