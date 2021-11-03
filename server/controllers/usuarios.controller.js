const Usuario = require('../models/usuario.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

exports.login = function(req, res, next){
    let hashedpass = crypto.createHash('sha512').update(req.body.password).digest('hex');
    Usuario.findOne({
        usuario: req.body.usuario,
        password: hashedpass
    }, function(err, usuario) {
        let response = {
            token: null
        }
        if(usuario !== null) {
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, '__secret__' )
        }
        res.json(response)
    } )
}