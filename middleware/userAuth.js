import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not authorized, login again" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
};

export default userAuth;