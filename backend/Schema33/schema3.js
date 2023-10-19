var mongoose_=require("mongoose");

var schema33=mongoose_.Schema;

var info=new schema33(

    {
       
        course_:{type:String},
        location_:{type:String},
        name_:{type:String},
        subject_:{type:String},
        phone_:{type:Number}

    }
)

module.exports=mongoose_.model("information",info);