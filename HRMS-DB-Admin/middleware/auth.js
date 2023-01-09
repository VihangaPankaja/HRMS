const jwt = require('jsonwebtoken');

let authRequire = (req, res, next) => {
    let errorMessage = "Session Expired! Please join again to continue";
    let token;
    try 
        {token = req.headers['token'].replace(/['"]+/g, '');}
    
    catch (errot) {
        return res.json({
            status: 'error',
            error: errorMessage
        });
    }

    //Check whether jwt exists and it is verified
    if(token){
        jwt.verify(token, process.env.JWT_ENV, (err, decodedToken) => {
            if(err){
                console.log(err.message);
                return res.json({
                    status: 'error',
                    error: errorMessage
                });
            }
            else{
                next();
            }
        });
    }
    else{
        console.log('Token not found');
        return res.json({
            status: 'error',
            error: errorMessage
        });
    }
};

let requireRouteAuth = (req, res, next) => {
    let errorMessage = "Error! Please try again";
    let token;
    try {
        token = req.headers['token'].replace(/['"]+/g, '');
    }
    catch (err) {
        return res.json({
            status: 'authentication error',
            error: errorMessage
        });
    }

    //Verifing the jwt token
    if(token){
        jwt.verify(token, process.env.JWT_ENV, (err, decodedToken) => {
            if(err){
                console.log(err.message);
                return res.json({
                    status: 'authentication error',
                    error: errorMessage
                });
            }
            else{
                next();
            }
        });
    }
    else{
        console.log('not token');
        return res.json({
            status: 'auth-error',
            error: errorMessage
        });
    }
};

const maximumAge = 1 * 24 * 60 * 60;
const createToken = async (user) => {
    const accessToken = await jwt.sign(
        {
            username: user.username,
            userId: user.id,
            role: user.type,
            paygrade: user.paygrade,
        },
        process.env.JWT_ENV,
        {
            expiresIn: maximumAge
        }
        );
        return accessToken;
};

module.exports = {
    authRequire,
    requireRouteAuth,
    createToken,
};