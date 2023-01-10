const users = require('../database/users');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const enc = require('../middleware/encryptionHandler');

exports.user_login = async (req, res) => {

    let user = await users.getUserByUsername(req.body.username);
  
    if (!user.status) {
      return res.status(502).json({
        message: "Finding user failed.",
      });
    }
  
    if (user.values.length > 0) {
      user = user.values[0];
      await bcrypt.compare(req.body.password, user.password, async (err, result) => {
        if (err) {
          return res.status(400).json({
            message: "Authentication failed",
          });
        }
        if (result) {
            const access_token = jwt.sign(
            {
                username: user.username,
                userId: user.id,
                role: user.type,
                pay_grade: user.pay_grade,
            },
            process.env.ACCESS_TOKEN_KEY,
            {
                expiresIn: "2h", // 2h
            }
            );
            user.token = access_token
            res.status(201).json({"username":user.username, "user_id":user.id, "pay_grade":user.pay_grade, "type":user.type, "token":user.token});
        } else {
            return res.status(400).json({
                message: "Password does not match.",
            });
        }
        });
    } else {
        return res.status(400).json({
            message: "User does not exist.",
        });
    }
  };

exports.getProfile = async (req, res) => {
  let user = await users.getEmployee(req.user.userId);

  if (!user.status) {
    return res.status(502).json({
      message: "Finding user failed.",
    });
  }

  if (user.values.length > 0) {
    user = user.values[0];
    return res.status(200).json({user});
  } else {
      return res.status(400).json({
          message: "User does not exist.",
      });
  }
};
  