import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3001;

app.get("/api/healthz", (_req, res) => {
  res.json({ ok: true, service: "laben-api" });
});

app.listen(port, () => {
  console.log(`LABEN API running on http://localhost:${port}`);
});
