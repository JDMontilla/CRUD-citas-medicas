//importamos la conexion a la base de datos

import conectarBD from "../configDB/db.js";

// importaos sequelize

import { DataTypes } from "sequelize";

const Citas = conectarBD.define('citas', {

      nombre_medico: 
      { type: DataTypes.STRING,
      allowNull: false},

      especialidad: 
      { type: DataTypes.STRING,
      allowNull: false},

      fecha: 
      { type: DataTypes.STRING,
      allowNull: false},

      duracion: 
      { type: DataTypes.STRING,
      allowNull: false},

})

export default Citas;