const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comment', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user:{
        type: DataTypes.STRING,
        defaultValue:"Anonimo"
    },
    recipeId:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  },{
    timestamps: false
	});
};
