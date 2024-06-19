const express = require("express");
const router = express.Router();
const EventJoinController = require("../controllers/EventJoin");

router.get("/", async (req, res) => {
    res.send(await EventJoinController.GetEventJoin())
})

router.post("/", async (req, res) => {
    const response = await EventJoinController.CreateEventJoin(req.body);
    res.send(response);
})


router.delete("/", async (req, res) => {
    const response = await EventJoinController.DeleteEventJoin(req.body.id);
    res.send(response);
})

module.exports = router