const express = require("express");
const router = express.Router();
const UserEventController = require("../controllers/UserEvent");

router.get("/", async (req, res) => {
    res.send(await UserEventController.GetUserEvent())
})

router.post("/", async (req, res) => {
    const response = await UserEventController.CreateUserEvent(req.body);
    res.send(response);
})


router.delete("/", async (req, res) => {
    const response = await UserEventController.DeleteUserEvent(req.body.id);
    res.send(response);
})

module.exports = router