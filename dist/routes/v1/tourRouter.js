"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tours_controller_1 = require("../../controllers/tours.controller");
const router = (0, express_1.Router)();
router.post("/", tours_controller_1.toursRouter.createTour);
exports.default = router;
