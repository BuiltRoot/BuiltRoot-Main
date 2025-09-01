// api/monitor.js
export default function handler(req, res) {
  const mem = process.memoryUsage();
  res.status(200).json({
    uptime_seconds: Math.round(process.uptime()),
    memory: {
      rss: mem.rss,
      heapTotal: mem.heapTotal,
      heapUsed: mem.heapUsed,
      external: mem.external
    },
    ok: true,
    ts: new Date().toISOString()
  });
}
