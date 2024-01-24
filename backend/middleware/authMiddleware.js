const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../config");
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Authentication failed" });
  }
}
module.exports = { authMiddleware };
