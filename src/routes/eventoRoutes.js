const express = require("express");
const router = express.Router();
const EventoController = require("../controllers/EventoController");

router.get("/", EventoController.index);
router.get("/:id", EventoController.show);
router.post("/", EventoController.store);
router.put("/:id", EventoController.update);
router.delete("/:id", EventoController.destroy);

module.exports = router;