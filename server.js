require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Webhookエンドポイント
app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);
  res.status(200).send("OK");
});

// 動作確認用のGETリクエスト
app.get("/", (req, res) => {
  res.send("Node.js Server on Render is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
