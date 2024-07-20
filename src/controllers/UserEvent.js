const db = require("../db/models")
const model = require("../db/models/usuarioevento")(db.sequelize, db.Sequelize)

module.exports.GetUserEvent = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.GetUserEvent = async (data) => {
    console.log(data);
    const response = await db.Evento.create(data);
 
    return response;
}

//module.exports.GetUserEvent = async (id) => {
    // Codigo para eliminar
//}
