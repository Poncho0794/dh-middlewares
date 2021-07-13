const usuarios = require('../data/users.json')
function verificarUsuario(req,res,next){
    let nombre = req.query.name;
    
    let usuario = usuarios.find(obj => obj.name === nombre);
    req.user = usuario;
    next();
}

module.exports = verificarUsuario;