const adminAuth = (req, res, next) => {
  const { token } = req.headers;
  if (token === process.env.ADMIN_TOKEN) {
    next();
  } else {
    res.json({ success: false, message: "Not authorized" });
  }
};

export default adminAuth;