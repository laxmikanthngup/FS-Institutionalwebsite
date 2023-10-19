import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Postfrombc from "./Postfrombc";
import Getfrombc from "./Getfrombc";
import Gohome from "./Gohome";
import "./Tabb.css"

function Tabsone(){
    return(
        <div className="t1">
            <Tabs>
            <img style={{width:"100px",height:"80px",marginLeft:"100px",marginTop:"-30px"}} src="./images/book.png"/>
           <TabList className="t2">
                   {/* <Tab><img style={{width:"100px",marginLeft:"100px",marginTop:"-30px"}} src="./images/book.png"/></Tab> */}
                   <Tab><button style={{width:"100px",marginLeft:"130px"}} className="btn btn-warning" >Home</button></Tab>
                   <Tab><button style={{width:"100px",marginLeft:"130px"}}className="btn btn-warning">Form</button></Tab>
                    <Tab><button  style={{width:"100px",marginLeft:"130px"}}className="btn btn-warning">Student</button></Tab>
                    
                </TabList>
         {/* style={{width:"100%",backgroundColor:"orange"}} */}
                
         <TabPanel>
                <Gohome/>
            </TabPanel>

            <TabPanel>
                <Postfrombc/>
            </TabPanel>
            <TabPanel>
                <Getfrombc/>
            </TabPanel>
            
            </Tabs>
        </div>
    )
}
export default Tabsone;