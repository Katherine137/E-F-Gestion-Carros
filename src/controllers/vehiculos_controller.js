import Vehiculos from "../models/Vehiculos.js";

const crearVehiculos = async (req,res) =>{
    try {
        const {marca, modelo, anio_fabricacion, placa, color, tipo_vehiculo, kilometraje, descripcion} = req.body
        const existe = await Vehiculos.findOne({placa})
        if (existe) {
            return res.status(400).json({message: "Ya esta creado el vehiculo"})
        }
        const nuevoVehiculo = new Vehiculos({
            marca,
            modelo,
            anio_fabricacion,
            placa,
            color,
            tipo_vehiculo,
            kilometraje,
            descripcion
        })
        await nuevoVehiculo.save()
        res.json({message: "Vehiculo creado correctamente", nuevoVehiculo})
    } catch (error) {
        res.status(500).json({message:"Error al crear el vehiculo", error:error.message})
    }
}

const listarVehiculos = async (req,res) =>{
    try {
        const vehiculos = await Vehiculos.find().sort({createdAT: -1})
        res.json({message: "Vehiculos", vehiculos})
    } catch (error) {
        res.status(500).json({message: "Error al obtener vehiculos", error:error.message})
    }
}

const actualizarVehiculos = async (req,res) =>{
    try {
        const {id} = req.params
        const vehiculoActualizado = await Vehiculos.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!vehiculoActualizado) {
            return res.status(404).json({message: "Vehiculo no encontrado"})
        }
        res.json({message: "Vehiculo actualizado correctamente", vehiculoActualizado})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar el vehiculo", error:error.message})
    }
}

const eliminarVehiculos = async (req,res) =>{
    try {
        const {id} = req.params
        const vehiculoEliminado = await Vehiculos.findByIdAndDelete(id)
        if (!vehiculoEliminado) {
            return res.status(404).json({message: "Vehiculo no encontrado"})
        }
        res.json({message: "Vehiculo eliminado correctamente", vehiculoEliminado})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar el vehiculo", error:error.message})
    }
}

const obtenerVehiculosPorID = async (req,res) =>{
    const vehiculo = await Vehiculos.findById(req.params.id)
    res.json({message: "Vehiculo", vehiculo})
}

export{
    crearVehiculos,
    listarVehiculos,
    obtenerVehiculosPorID,
    actualizarVehiculos,
    eliminarVehiculos
}