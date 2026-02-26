import { Schema, model } from "mongoose";

const VehiculosSchema = new Schema({
    marca:{
        type:String,
        required:true,
        trim:true
    },
    modelo: {
        type:String,
        required:true,
        trim:true
    },
    anio_fabricacion: {
        type:Number,
        required:true,
        min:1900,
        max: new Date().getFullYear()
    },
    placa:{
        type:String,
        required:true,
        unique:true
    },
    color:{
        type:String,
        required:true
    },
    tipo_vehiculo:{
        type:String,
        required:true
    },
    kilometraje:{
        type:String,
        required:true
    },
    descripcion:{
        type:String
    }
},{
    timestamps:true
})

export default model('Vehiculos',VehiculosSchema)