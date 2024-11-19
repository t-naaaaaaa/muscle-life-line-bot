require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const {
  getRandomMessageByCategory,
  getMessageByKeyword,
} = require("./src/config/messages");

const app = express();
const PORT = process.env.PORT || 3000;
const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN;
const LINE_REPLY_API = "https://api.line.me/v2/bot/message/reply";

if (!CHANNEL_ACCESS_TOKEN) {
  console.error("⚠️ CHANNEL_ACCESS_TOKEN is not set in .env");
  process.exit(1);
}

app.use(bodyParser.json());

const generateResponse = (userMessage) => {
  // カテゴリによる返信
  const categories = ["motivation", "training", "mindset", "discipline"];
  if (categories.includes(userMessage.toLowerCase())) {
    return getRandomMessageByCategory(userMessage.toLowerCase());
  }

  // キーワードによる返信
  const keywords = ["筋トレ", "限界", "疲れ", "眠い", "朝"];
  const matchedKeyword = keywords.find((kw) => userMessage.includes(kw));
  if (matchedKeyword) {
    return getMessageByKeyword(matchedKeyword);
  }

  // デフォルトの返信
  return getRandomMessageByCategory("motivation");
};

app.post("/webhook", async (req, res) => {
  const events = req.body.events;
  if (!events || events.length === 0) {
    return res.status(200).send("No events received.");
  }

  for (const event of events) {
    if (event.type === "message" && event.message.type === "text") {
      const replyToken = event.replyToken;
      const userMessage = event.message.text.trim();
      const replyMessage = generateResponse(userMessage);

      try {
        await axios.post(
          LINE_REPLY_API,
          {
            replyToken,
            messages: [{ type: "text", text: replyMessage }],
          },
          {
            headers: { Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}` },
          }
        );
      } catch (error) {
        console.error(
          "Error sending message:",
          error.response?.data || error.message
        );
      }
    }
  }

  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
