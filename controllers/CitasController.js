// importamos el modelo
import Citas from '../models/Citas.js';

// metodos o funciones CRUD

// funcion o metodo mostrar todas las citas

export const getAllCitas = async(req, res) => {
    try {

        const citas = await Citas.findAll();
        res.json(citas);
        
    } catch (error) {
        res.json({msg: error.message})
    }
}