const db = require("../db/models")
const model = require("../db/models/registroevento")(db.sequelize, db.Sequelize)

module.exports.GetRegisterEvent = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.CreateRegisterEvent = async (data) => {
    console.log(data);
    const response = await db.Evento.create(data);
 
    return response;
}

//module.exports.CreateRegisterEvent = async (id) => {
    // Codigo para eliminar
//}
