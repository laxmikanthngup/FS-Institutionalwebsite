import axios from "axios";
import { useState } from "react";
import Getfrombc from "./Getfrombc";

function Postfrombc(){
    var [postinfo,setPostinfo]=useState({course_:"",location_:"",name_:"",subject_:"",phone_:""});
    var [sendinfo,setSendinfo]=useState(false)

var postThisData=(e)=>{
    e.preventDefault()
    
     axios.post("http://127.0.0.1:3010/postdata",postinfo)
     .then(()=>{
        console.log("data posted successfully")
        setPostinfo({course_:"",location_:"",name_:"",subject_:"",phone_:""})
     })
     .catch(()=>{
        console.log("data failed to post")
     })
}
var  postTargetData=(e)=>{
    setPostinfo((data)=>({...data,[e.target.name]:e.target.value}))
}


    return(
        <div>
        <div className="inpt">
        
           <form onSubmit={postThisData}>
            <div className="inpt1">
             COURSE : <input type="text"   onChange={postTargetData}  name="course_"  value={postinfo.course_} /><br></br><br></br>
             LOCATION : <input type="text"   onChange={postTargetData}   name="location_" value={postinfo.location_} /><br></br><br></br>
             NAME     : <input type="text"   onChange={postTargetData}  name="name_" value={postinfo.name_} /><br></br><br></br>
             SUBJECT     :<input type="text"   onChange={postTargetData}  name="subject_"  value={postinfo.subject_}/><br></br><br></br>
             PHONE NO :<input type="Number"   onChange={postTargetData}  name="phone_" value={postinfo.phone_}/><br></br><br></br>
                        <input type="submit"/>
                        </div>           
           </form>
          
        {/* <Getfrombc give={sendinfo}/> */}
        </div>
        <marquee style={{backgroundColor:"green",marginBottom:"-10px",color:"white"}}>Please Fill The Above Form For Registeration</marquee>

        <div className="logins">
                 <a href="https://www.facebook.com/login/"><img src="../images/fb.png" width="40px" height="30px"/></a>
                 <a href="https://web.whatsapp.com/"><img style={{marginLeft:"30px"}}src="../images/wt.png" width="50px" height="30px"/></a>
                 <a href="https://www.instagram.com/"><img style={{marginLeft:"30px"}} src="../images/ins.png" width="35px" height="30px"/></a>
                 <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><img  style={{marginLeft:"30px"}} src="../images/tw.png" width="50px" height="30px"/></a>
                 <hr style={{marginLeft:"-500px"}}></hr>
                 <h4 style={{marginLeft:"-400px"}}>Contact us</h4>
                 <div className="cont">
                 <p>JOHNVI UNIVERSITY<br></br>
                    2400 Sixth Street NW<br></br>
                    Washington, DC 20059<br></br>
                   Phone: 222-106-2100</p>
                   </div>
                   <div className="cont2">
                 <p>UNDERGRADUATE ADMISSION<br></br>
                   admission@johnvi.edu<br></br>
                   Toll Free: 1-200-222-1233<br></br>
                   Phone: 001-806-1220 or 002-806-1001
                   </p>
                   </div>
                   <div className="cont3">
                 <p>JOHNVI UNIVERSITY HOSPITAL<br></br>
                   2041 Georgia Avenue NW<br></br>
                   Washington, DC 20060<br></br>
                    Phone: 222-106-2100</p>
                   </div>

           </div>
           
        </div>
    )
}

export default Postfrombc;