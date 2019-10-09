const express = require("express");

const routes = express.Router();

const ThumbnailController = require("./controllers/ThumbnailController");

routes.get("/thumbnail", ThumbnailController.index);
routes.post("/thumbnail", ThumbnailController.store);

module.exports = routes;