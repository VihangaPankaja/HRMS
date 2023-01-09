const jwt = require("jsonwebtoken");

const config = process.env;

const verify_token = (req, res, next) => {

  if (!req.headers["authenticationorization"]) {
    return res.status(403).send("A token is required for authenticationentication");
  }

  const token = req.headers["authenticationorization"].split(' ')[1];
  
  if (!token) {
    return res.status(403).send("A token is required for authenticationentication.");
  }
  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token.");
  }
  return next();
};


const has_paygrade = (paygrades) => {
  return (req, res, next) => {
    const userGrade = req.user.paygrade;
    if (paygrades.includes(userGrade)){
      next();
    } else {
      return res.status(403).send("Incorrect user type. Not authenticationorized.");
    }
  }
}

module.exports = {
  verify_token,
  has_paygrade
}