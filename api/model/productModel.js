import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    packSize:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    mrp:{
        type:String,
        required:true

    },
    images:{
        type:String,
        required:true
    }

})

export default mongoose.model("produts",productSchema)