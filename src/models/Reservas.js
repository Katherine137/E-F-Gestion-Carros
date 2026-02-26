import mongoose, { Schema, model } from "mongoose";

const ReservasSchema = new Schema({
    codigo:{
        type:Number,
        required:true,
        unique:true
    },
    descripcion:{
        type:String 
    },
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Clientes",
        required:true
    },
    vehiculo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehiculos",
        required:true
    }
}, { 
    timestamps:true
})

export default mongoose.model("Reservas",ReservasSchema)
