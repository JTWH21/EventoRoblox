'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Evento.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha_inicio: DataTypes.DATE,
    fin_registro: DataTypes.DATE,
    ubicacion: DataTypes.STRING,
    organizador: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};