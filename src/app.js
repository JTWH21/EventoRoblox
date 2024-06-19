require("dotenv").config()

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