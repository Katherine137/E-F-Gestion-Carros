import Reservas from "../models/Reservas.js";

const crearReservas = async  (req,res) =>{
    try {
        const {codigo, descripcion, cliente, vehiculo} = req.body
        const existe = await Reservas.findOne({codigo})
        if (existe) {
            return res.status(400).json({message: "Ya esta creada la reserva"})
        }
        const nuevaReserva = new Reservas({
            codigo,
            descripcion,
            cliente,
            vehiculo
        })
        await nuevaReserva.save()
        res.json({message: "Resereva creada correctamente", nuevaReserva})
    } catch (error) {
        res.status(500).json({message: "Error al crear la reserva", error:error.message})
    }
}

const listarReservas = async (req,res) =>{
    try {
        const reservas = await Reservas.find().sort({createdAt: -1})
            .populate("cliente")
            .populate("vehiculo")
        res.json({message: "Reservas", reservas})
    } catch (error) {
        res.status(500).json({message: "Error al obtener vehiculos", error:error.message})
    }
}

const actualizarReservas = async (req,res) =>{
    try {
        const {id} = req.params
        const reservaActualizada = await Reservas.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!reservaActualizada) {
            return res.status(404).json({message: "Reserva no encontrada"})
        }
        res.json({message: "Reserva actualizada correctamente", reservaActualizada})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar vehiculos", error:error.message})
    }
}

const eliminarReservas = async (req,res) =>{
    try {
        const {id} = req.params
        const reservaEliminada = await Reservas.findByIdAndDelete(id)
        if (!reservaEliminada) {
            return res.status(404).json({message:"Reserva no encontrada"})
        }
        res.json({message: "Reserva eliminada correctamente", reservaEliminada})
    } catch (error) {
        res.status(500).json({message:"Error al eliminar la reserva", error:error.message})
    }
}

const obtenerReservasPorID = async (req,res) =>{
    const reserva = await Reservas.findById(req.params.id)
    res.json({message: "Reserva", reserva})
}

export{
    crearReservas,
    listarReservas,
    actualizarReservas,
    eliminarReservas,
    obtenerReservasPorID
}