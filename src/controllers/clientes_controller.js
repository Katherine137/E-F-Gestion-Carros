import Clientes from "../models/Clientes.js";

const crearClientes = async (req,res) =>{
    try {
        const {cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento} = req.body
        const existe = await Clientes.findOne({cedula})
        if (existe) {
            return res.status(400).json({message: "Ya esta creado el cliente"})
        }
        const nuevoCliente = new Clientes({
            cedula,
            nombre,
            apellido,
            ciudad,
            email,
            direccion,
            telefono,
            fecha_nacimiento
        })
        await nuevoCliente.save()
        res.json({message: "Cliente creado correctamente", nuevoCliente})
    } catch (error) {
        res.status(500).json({message: "Error al crear el cliente", error:error.message})
    }
}

const listarClientes = async (req,res) =>{
    try {
        const cliente = await Clientes.find().sort({createdAt: -1})
        res.json({message: "Clientes", cliente})
    } catch (error) {
        res.status(500).json({message: "Error al obtener clientes", error:error.message})
    }
}

const actualizarClientes = async (req,res) =>{
    try {
        const {id} = req.params
        const clienteActualizado = await Clientes.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!clienteActualizado){
            return res.status(404).json({message: "Cliente no encontrado"})
        }
        res.json({message: "Cliente actualizado correctamente", clienteActualizado})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar el cliente", error:error.message})
    }
}

const eliminarClientes =  async  (req,res) =>{
    try {
        const {id} = req.params
        const clienteEliminado = await Clientes.findByIdAndDelete(id)
        if(!clienteEliminado){
            return res.status(404).json({message: "Cliente no enocntrado"})
        }
        res.json({message: "Cliente eliminado correctamente", clienteEliminado})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar clientes", error:error.message})
    }
}

const obtenerClientesPorID = async (req,res) =>{
    const clientes = await Clientes.findById(req.params.id)
    res.json({message: "Clientes", clientes})
}

export{
    crearClientes,
    listarClientes,
    obtenerClientesPorID,
    actualizarClientes,
    eliminarClientes
}