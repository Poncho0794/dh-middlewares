const { Router } = require("express");
const router = Router();
const controlador = require("../controllers/indexController")
router.get('/', controlador.index);

module.exports = router;