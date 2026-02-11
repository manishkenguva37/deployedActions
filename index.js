import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Vccccerfdsfdsgfdgfdcev    fdsfsdfsdf    vvl Express!" });
});

export default app;
