const db = require("../db/models")
const model = require("../db/models/evento")(db.sequelize, db.Sequelize)

module.exports.GetEventJoin = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.CreateEventJoin = async (data) => {
    console.log(data);
    const response = await db.Evento.create(data);

    return response;
}

//module.exports.DeleteEventJoin = async (id) => {
    // Codigo para eliminar
//}
