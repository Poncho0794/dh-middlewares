const fs = require('fs');

function userLogin(req, res, next){
    fs.appendFileSync('log.txt' ,'El usuario ingresó a la ruta: ' + req.url + '\n');
    next();
}

module.exports = userLogin;