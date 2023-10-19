var express_=require("express");
var route3=express_.Router();

var [postlaxmi,getlaxmi,removelaxmi,updatelaxmi]=require("../Controlles33/control33");

route3.post("/postdata",postlaxmi);
route3.get("/getdata",getlaxmi);
route3.delete("/removedata/:id",removelaxmi)
route3.put("/updatedata/:id",updatelaxmi)

module.exports=route3;