// importamos a express
import { express } from "express";
//importamos a nuestro controlador
import {} from '../controllers/CitasController.js'

const router = express.Router();

router.get('/', getAllCitas)


export default router;
