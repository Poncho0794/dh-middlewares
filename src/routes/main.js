const { Router } = require("express");
const router = Router();
const controlador = require("../controllers/indexController")
const verificarUsuario = require('../middlewares/verificarUsuario');
router.get('/', controlador.index);
router.get('/private', verificarUsuario,controlador.privateRoute);

module.exports = router;