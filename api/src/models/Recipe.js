const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      defaultValue:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    },
    summary:{
      type: DataTypes.TEXT,
    },
    steps:{
      type: DataTypes.TEXT,
    },
    healthScore:{
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue:1
    },
    created:{
      type: DataTypes.STRING,
      defaultValue:"user"
    }
  },{
    timestamps: false
	});
};
