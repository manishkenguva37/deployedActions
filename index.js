import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Vercel Express!" });
});

export default app;
