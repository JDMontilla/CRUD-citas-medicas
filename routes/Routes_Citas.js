// importamos a express
import express from 'express';
//importamos a nuestro controlador
import { getAllCitas, getCita, agregarCitas, modificarCita, eliminarCita} from '../controllers/CitasController.js'

const router = express.Router();

router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', agregarCitas);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);


export default router;
