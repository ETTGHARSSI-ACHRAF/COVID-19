const jwt = require("jsonwebtoken");

const checkTokenAdmin = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_ADMIN);
        if (token ) {

        req.region=decodedToken.result.id_region;
        // console.log(decodedToken.result.id_region);
          next();
          
          
        } else {
            return res.status(401).json({
                success:0,
                errorMessage:'Non autorisé'
            })
        }
      } catch {
        res.status(401).json({
          error: new Error('Invalid request!')
        });
      }
}

module.exports = {
    checkTokenAdmin
}