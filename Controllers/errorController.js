exports.get404 = (req, res, next) => {
  res.status(404).json({ "message": "404 Not Found" });
};

exports.get500 = (req, res, next) => {
  res.status(500).json({ "message": "500 Internal Server Error" });
};

