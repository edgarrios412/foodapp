const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"Admin"
    },
    email:{
      type: DataTypes.STRING,
      defaultValue:"miemail@gmail.com"
    },
    username:{
      type: DataTypes.STRING,
      defaultValue:"edgarrios412"
    },
    password:{
      type: DataTypes.STRING,
      defaultValue:"elacmin"
    },
  });
};
