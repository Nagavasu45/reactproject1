
import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import "./sty.css"
import { Store } from "./Datacompo"
function Technology(){
    const [data1]=useContext(Store)
    return(       

       
        <>
        <div className="mainb">
        <div className="b1">
           <div className="b3">Technology</div> 
           {data1.filter((item1)=>item1.level==="medium" && item1.catageory==="tech").map((item)=>{
            // if(item.level==="medium" && item.catageory==="tech"){
                return(
            <><Link to={`/Detailcompo/${item.id}`} className="l1">
                    <div className="b4">
                    <img className="b5" src={item.imgstore} alt="no loaded"/>
                    
                    
                    <div className="b6">
                        <div className="b7">{item.heading}</div>
                        <div className="bcolor">{item.details}</div>
                    </div>
                    </div>
                    </Link>
                    </>
                    
            )
                
           })}
    
        </div>
        <div className="b2">
        <div className="b8">
            Top Posts
        </div>
        {data1.filter((item1)=>item1.level==="maintop2").map((item)=>{
            // if(item.level==="maintop2"){
            return(
        <><Link to={`/Detailcompo/${item.id}`} className="l1">
        <div className="b13">
            <img className=" topimg" src={item.imgstore} alt="not loaded"/>
            <div className="c11">{item.heading}
    
            </div>
        </div>
        </Link>
        </>)
            
            
    
        })}
        
        
        {data1.filter((item1)=>item1.level==="top" && item1.catageory==="tech").map((item)=>{
            // if(item.level==="top" && item.catageory==="tech"){
                return(
                    
                    <><Link to={`/Detailcompo/${item.id}`} className="l1">
                    <div className="b9">
                        <img className="b10" src={item.imgstore} alt="not loaded"/>
                    
                    <div className="b11">
                        {item.heading}
    
                    </div>
                    {/* <div className="b12">
                        1
                    </div> */}
                    </div>
                    
                    </Link>
                    </>
                    
                )
            
            })}
            <div className="bollyads1">
            <div className="ads1">
        adevertizement
        </div>

    </div>
    
    </div>
    </div>
        
            
    <div className="f1">
    <div >
    <div className="f2">Follow Us</div>
    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/share--v1.png" alt="share--v1"/>
     <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play"/>
     <img width="30" height="30" src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-social-media-fb-logo-square-44659.png?f=avif&w=256" alt="instagram"/>
     <img width="30" height="30" src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-158-761636.png?f=avif&w=256" alt="what's app "/>
    </div>
    <div >
        
    <div className="f2">Quick Links</div>
   
    <NavLink to="/">
    <div>Home Page</div>
    </NavLink>
    <NavLink to="/Bollywood">
    <div>Bollywood </div>
    </NavLink>
    <NavLink to="/Hollywood">
    <div>Hollywood</div>
    </NavLink>
    <NavLink to="/Fitness">
    <div>Fitness</div>
    </NavLink>
    <NavLink to="/Food">
    <div>Food</div>
    </NavLink>
    </div>
    <div >
    <div className="f2">Contact us:</div>
    <div>Cell no: +91-9133610098</div>
    <div>Mail id:nagavasu450@gmail.com </div>
    
    </div>
    
</div>
        </>
    
           
        )
    
    }
export default Technology