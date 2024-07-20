require("dotenv").config()

<<<<<<< HEAD

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
=======
const express = require("express")
const port = process.env.APP_PORT
const app = express()

app.use(express.json());

const routes = require('./routes');

app.use("/UsuarioEvento", routes.UsuarioEventoRoutes)
app.use("/RegistroEvento", routes.RegistroEventoRoutes)
app.use("/JoinEvent", routes.JoinEventRoutes)




app.listen(port, () => {
    console.log("ABRIENDO FIESTA ROBLOX!")
}) 
>>>>>>> 995c7105c305559ca91777096b99d58789bcc5ee
