import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(express.json({ limit: "100kb" }));

app.get("/api/healthz", (_req, res) => {
  res.json({
    ok: true,
    service: "laben-api",
  });
});

app.get("/api/foundation/status", (_req, res) => {
  res.json({
    stage: "foundation",
    service: "laben-api",
    auth: "not_connected",
    database: "not_connected",
    marketData: "not_connected",
    quantitativeEngines: "not_implemented",
    demoData: "not_seeded",
  });
});

app.listen(port, () => {
  console.log(`LABEN API running on http://localhost:${port}`);
});
