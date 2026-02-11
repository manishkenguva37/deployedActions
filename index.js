import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Vercev    fdsfsdfsdf    vvl Express!" });
});

export default app;
