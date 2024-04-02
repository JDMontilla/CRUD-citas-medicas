import {Sequelize} from "sequelize";

const conectarBD = new Sequelize('database_citas','postgres','3003394453',{
    host: 'localhost',
    dialect: 'postgres'
});

export default conectarBD;