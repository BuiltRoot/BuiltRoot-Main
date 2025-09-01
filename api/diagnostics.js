// api/diagnostics.js
export default function handler(req, res) {
  const mem = process.memoryUsage();
  res.status(200).json({
    ok: true,
    service: "BuiltRoot Engine",
    ts: new Date().toISOString(),
    uptime_seconds: Math.round(process.uptime()),
    env: {
      vercel: process.env.VERCEL === "1",
      commit: process.env.VERCEL_GIT_COMMIT_SHA || null,
      branch: process.env.VERCEL_GIT_COMMIT_REF || null
    },
    memory: {
      rss: mem.rss,
      heapTotal: mem.heapTotal,
      heapUsed: mem.heapUsed
    }
  });
}
