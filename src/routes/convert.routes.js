
const express = require('express');
const convertRouter = express.Router();
const convertController = require('../controllers/convert.controller')

/** get random route */
convertRouter.get(`/convert`, convertController.convert);

module.exports = convertRouter;
