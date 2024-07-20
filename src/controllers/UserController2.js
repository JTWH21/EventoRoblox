const db = require("../db/models")
const model = require("../db/models/user")(db.sequelize, db.Sequelize)

module.exports.CreateUser = async (data) => {
    const res = await model.create({
        name: data.name,
        username: data.username,
        password: data.password
    });
    return res;
}