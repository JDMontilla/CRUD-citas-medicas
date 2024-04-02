import {Sequelize} from "sequelize";

const conectarBD = new Sequelize('database_citas','root','',{
    host: 'localhost',
    dialect: 'postgres'
});

export default conectarBD;