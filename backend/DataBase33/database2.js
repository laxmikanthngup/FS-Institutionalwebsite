var mongoose_=require("mongoose");

var llink="mongodb://127.0.0.1:27017/laxmiKanth"

var dbc=mongoose_.connect(llink,{useNewUrlParser:true});

var dbcc=mongoose_.connection;

dbcc.on("error",()=>{
    console.log("failed to connect");
})
dbcc.once("open",()=>{
    console.log("connected")
})

module.exports=dbc