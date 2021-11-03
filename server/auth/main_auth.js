const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, '__secret__')
        req.usuario = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({ code: 401, msg: "No Autorizado" })
    }
}

module.exports = auth;