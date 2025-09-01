// api/auth.js
export default function handler(req, res) {
  res.status(200).json({
    message: "Auth endpoint placeholder",
    method: req.method,
    ts: new Date().toISOString()
  });
}
