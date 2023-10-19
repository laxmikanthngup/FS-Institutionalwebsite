var laxmi=require("../Schema33/schema3");

var postlaxmi=(req,res)=>{
    laxmi.create(req.body)
    .then(()=>{
        console.log("data posted successfully")
        res.send("data posted successfully")
    })
    .catch(()=>{
        console.log("data failed")
        res.send("data failed")
    })
}

var getlaxmi=(req,res)=>{
 laxmi.find()
 .then((data)=>{
    console.log("data got successfully");
 res.send(data)
 })
 .catch(()=>{
    console.log("data failed")
    res.send("data failed")
 })
}
var removelaxmi=(req,res)=>{
    laxmi.findByIdAndRemove(req.params.id,req.body)
    .then(()=>{
        console.log("data is deleted")
        res.send("data is deleted")
    })
    .catch(()=>{
        console.log("data is failed to delete")
        res.send("data is failed to delete")
    })
}

var updatelaxmi=(req,res)=>{
    laxmi.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{
        console.log("data updated successfully")
        res.send("data updated successfully")
    })
    .catch(()=>{
        console.log("data failed to update")
        res.send("data failed to update")
    })
}

module.exports=[postlaxmi,getlaxmi,removelaxmi,updatelaxmi]
