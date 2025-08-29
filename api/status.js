// /api/status.js
module.exports = (req, res) => {
  res.status(200).json({
    status: "BuiltRoot Engine is live ✅",
    ts: new Date().toISOString()
  });
};
