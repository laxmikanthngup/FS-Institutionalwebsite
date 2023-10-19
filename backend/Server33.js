var express_=require("express");
var myServer=express_();
var cors_2=require("cors")

require("./DataBase33/database2");

var routeCA=require("./Route33/route33");
myServer.listen(3010,()=>{console.log('server started');});
myServer.use(express_.urlencoded({extended:false}));
myServer.use(cors_2());
myServer.use(express_.json())
myServer.use("/",routeCA)
myServer.get("/",(req,res)=>{
    console.log("welcome")
})