const { validationResult } = require('express-validator');

const errors = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next();
  } catch (errors) {
    const listerrors = errors.array().map((error) => error.msg)
    return res.status(403).json({message: listerrors})
  }
};

module.exports = { errors };