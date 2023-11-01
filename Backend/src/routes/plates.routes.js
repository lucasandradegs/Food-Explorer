const { Router } = require("express")
const PlatesController = require("../controller/PlatesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const platesController = new PlatesController();
const platesRoutes = Router()

platesRoutes.use(ensureAuthenticated)

platesRoutes.post("/", platesController.create)
platesRoutes.put("/:id", platesController.update)
platesRoutes.get("/:id", platesController.show)
platesRoutes.delete("/:id", platesController.delete)
platesRoutes.get("/", platesController.index)

module.exports = platesRoutes;