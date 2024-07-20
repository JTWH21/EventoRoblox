const db = require("../db/models")
const model = require("../db/models/user")(db.sequelize, db.Sequelize)

const bcrypt = require("bcrypt")

module.exports.CreateUser = async (data) => {
    const res = await model.create({
        name: data.name,
        email: data.email,
        password: data.password
    });
    return res;
}


module.exports.FindUserByEmail = async (data) => {

    let users = await model.findAll({
        where: {
            email: data.email
        }
    });

    if (users.length > 0) {
        let pass = await bcrypt.compare(data.password, users[0].password)
        return pass
    }

    return false;
}



