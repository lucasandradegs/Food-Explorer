const { Router } = require("express")
const PlatesController = require("../controller/PlatesController")
const PlateImageController = require("../controller/PlateImageController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization")

const multer = require("multer")
const uploadConfig = require("../configs/upload")

const platesController = new PlatesController();
const plateImageController = new PlateImageController();

const platesRoutes = Router()
const upload = multer(uploadConfig.MULTER)

platesRoutes.use(ensureAuthenticated)


platesRoutes.post("/", verifyUserAuthorization("admin"), upload.single("image"), platesController.create)
platesRoutes.put("/:id", verifyUserAuthorization("admin"), platesController.update)
platesRoutes.get("/:id", platesController.show)
platesRoutes.delete("/:id", verifyUserAuthorization("admin"), platesController.delete)
platesRoutes.get("/", platesController.index)
platesRoutes.patch("/:id", verifyUserAuthorization("admin"), upload.single("image"), plateImageController.update)

module.exports = platesRoutes;