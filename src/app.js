require("dotenv").config()


const express = require("express")
const port = process.env.APP_PORT
const app = express()
const jwt = require('jsonwebtoken');
const cors = require("cors")
const path = require("path")

app.use(express.json());
app.use(cors({ origin: ["*"] }))

const routes = require('./routes');

app.get("/login", (req, res) => {
    res.sendfile(path.join(__dirname, "views", "index.html"))
})


// Middleware para autenticar usuarios
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.use("/autores", routes.AuthorRoutes)
app.use("/auth", routes.UserRoutes)

app.listen(port, () => {
    console.log("Server Online!")
})
