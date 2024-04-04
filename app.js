// importsamos express

import Express from'express'

// importamos cors
import cors from 'cors' 
// importamos la conexion a la base de datos
import conectarBD from './configDB/db.js';
//importamos a nuestras rutas
import citasRoutes from './routes/Routes_Citas.js'

const app = Express();
app.use(cors());
app.use('/citas', citasRoutes)
app.use(Express.json());


// verificamos la conexion a la base de datos
try {
    await conectarBD.authenticate();
    console.log('conexion a la base de datos con exito.');
  } catch (error) {
    console.error('Tenemos un error al conectar la base de datos', error);
  }





app.get('/', (req,res) =>{
    res.send('Hola Mundo');
})

app.listen(5000, ()=>{
    console.log('El servidor esta corriendo http://localhost:5000')
});