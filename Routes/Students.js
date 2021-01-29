//import express
const express = require("express");
const router = express.Router();
const studentsControllers = "../Controllers/Students";

router.get("/elie", studentsControllers.logElie);
router.get("/aria", studentsControllers.logAria);
router.get("/noni", studentsControllers.logNoni);

//export router
module.exports = router;
