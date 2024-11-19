const {
  getRandomMessageByCategory,
  getMessageByKeyword,
} = require("./src/config/messages");

test("ギャンブルキーワードの応答", () => {
  const response = getMessageByKeyword("楽したい");//検証したいワード
  console.log("LINEでの回答:", response); // 応答メッセージを表示
  expect(response).toBeDefined();
});

test("カテゴリによる応答 (motivation)", () => {
  const response = getRandomMessageByCategory("motivation");
  console.log("カテゴリ (motivation) の応答:", response); // 応答メッセージを表示
  expect(response).toBeDefined();
});
