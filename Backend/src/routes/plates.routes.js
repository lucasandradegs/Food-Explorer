const { Router } = require("express")
const PlatesController = require("../controller/PlatesController")

const platesController = new PlatesController();
const platesRoutes = Router()

platesRoutes.post("/:user_id", platesController.create)
platesRoutes.put("/:id", platesController.update)
platesRoutes.get("/:id", platesController.show)
platesRoutes.delete("/:id", platesController.delete)
platesRoutes.get("/", platesController.index)

module.exports = platesRoutes;