import axios from "axios";
import { useEffect, useState } from "react";
import "./Tabb.css"

function Getfrombc({bring}){
    var [getinfo,setGetinfo]=useState([]);
    var [display,setDisplay]=useState(false)
    var [updateinfoId,setUpdatainfoId]=useState()
    var [model,setModel]=useState(false)
    var [updateInfo,setUpdataInfo]=useState({course_:"",location_:"",name_:"",subject_:"",phone_:""})



    useEffect(()=>{

        axios.get("http://127.0.0.1:3010/getdata")
        .then((res)=>{
            console.log("data getting successfully")
            setGetinfo(res.data)
            console.log(getinfo)
        })
        .catch(()=>{
            console.log("data getting failed")
        })
    },[display])




    var removeinfo=(abc)=>{
        axios.delete(`http://127.0.0.1:3010/removedata/${abc}`)
        .then(()=>{
            console.log("data removed successfully")
        })
        .catch(()=>{
            console.log("data is failed to remove")
        })
        setDisplay(!display)
    }





    var updatadatainfo=(abc)=>{
        // setDisplay(!display);
        setUpdatainfoId(abc);
    }



    var getotherdata=(e)=>{
        setUpdataInfo((data)=>({...data,[e.target.name]:e.target.value}))
    }
 
    var updatehere=(e)=>{
        e.preventDefault()
        axios.put(`http://127.0.0.1:3010/updatedata/${updateinfoId}`,updateInfo)
        .then(()=>{
            console.log("data updated")
           setUpdataInfo({course_:"",location_:"",name_:"",subject_:"",phone_:""})
           setDisplay(!display);
        })
        .catch(()=>{
            console.log("data failed to update")
        });
        
        // setModel(!model)
    }



    return(
        <div>
            
             {getinfo.map((abc)=>{
               return(
              
     <div className="get dbdy">      
     <div className="card mb-2" >
     <div className="row g-0">

     <div className="col-sm-4">
     <img src="./images/bng.jpg" class="img-fluid rounded-start" alt="..." style={{width:"490px",height:"218px",border:"2px solid black"}}/>
     </div>

        <div className="col-sm-4">
        <div className="card-body">   
             
        <p>course:{abc.course_}</p>
        <p>Location:{abc.location_}</p>
        <p>Name:{abc.name_}</p>
        <p>Subject:{abc.subject_}</p>
        <p>Phone no:{abc.phone_}</p> 

        </div>
        </div>

        </div> 
        </div>
        <div className="aa">
       <button className="btn btn-primary" onClick={()=>{removeinfo(abc._id)}}>Delete</button>&nbsp;
        <button  className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={()=>{updatadatainfo(abc._id)}}>update</button>  
               </div>  
        
        </div>
               
               
               )
             })}
             
             {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Enter Details Which Need To Be Updated</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="scinpt">
            <form onSubmit={updatehere}>
            COURSE :       <input type="text" onChange={getotherdata} name="course_" value={updateInfo.course_} />
            LOCATION :     <input type="text" onChange={getotherdata} name="location_"  value={updateInfo.location_}/>
            NAME :         <input type="text" onChange={getotherdata} name="name_" value={updateInfo.name_} />
            SUBJECT:       <input type="text" onChange={getotherdata} name="subject_"  value={updateInfo.subject_}/>
            PHONE NO:      <input type="text"  onChange={getotherdata}name="phone_"  value={updateInfo.phone_}/>
                    <input type="submit" class="btn btn-secondary"/>
                </form>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

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
                   admission@howard.edu<br></br>
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

export default Getfrombc;