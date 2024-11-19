//messages.js

// 筋トレメッセージのリスト
const botMessages = [
  {
    id: 1,
    text: "悩みを重量に変換しろ！それが最強のウェイトトレーニングだ！",
    category: "motivation",
  },
  {
    id: 2,
    text: "弱い自分を受け入れるな、筋肉で打ち砕け！それが成長への一歩だ！",
    category: "mindset",
  },
  {
    id: 3,
    text: "筋トレは99%の汗と1%の根性だ。どっちが足りてる？",
    category: "discipline",
  },
  {
    id: 4,
    text: "期待値計算してるか？人生も筋トレも数字で考えろ！",
    category: "mindset",
  },
  {
    id: 5,
    text: "全ての問題は筋肉不足が原因。まずは自分を大きくしろ！",
    category: "motivation",
  },
  {
    id: 6,
    text: "お前の器が小さいんじゃない、筋肉が足りないだけだ！",
    category: "mindset",
  },
  {
    id: 7,
    text: "眠いのは筋肉が欲しがってるサイン。今すぐスクワット！",
    category: "training",
  },
  {
    id: 8,
    text: "RASを味方につけろ！トレーニングで脳を覚醒させろ！",
    category: "mindset",
  },
  {
    id: 9,
    text: "コンフォートゾーンは筋肉の墓場だ。限界を超えていけ！",
    category: "motivation",
  },
  {
    id: 10,
    text: "BIG3の重量=心の強さ。数字で語れ！",
    category: "training",
  },
  {
    id: 11,
    text: "目標設定が甘いんじゃない、筋トレでゴールの解像度を上げろ！",
    category: "mindset",
  },
  {
    id: 12,
    text: "停滞期は超回復期間だ。心も体も休ませろ！",
    category: "discipline",
  },
  {
    id: 13,
    text: "RASは最強の味方！毎日の筋トレで目標達成の脳を作れ！",
    category: "mindset",
  },
  {
    id: 14,
    text: "コンフォートゾーンは成長の敵。高重量で快適を破壊しろ！",
    category: "training",
  },
  {
    id: 15,
    text: "セルフイメージは行動を制限する。筋トレで限界を更新しろ！",
    category: "mindset",
  },
  {
    id: 16,
    text: "思考の解像度を上げろ。具体的なゴールが見えてないのは筋トレ不足だ！",
    category: "mindset",
  },
  {
    id: 17,
    text: "ネガティブ思考は最高のウェイト！その重さを活かせ！",
    category: "motivation",
  },
  {
    id: 18,
    text: "スコトーマ（知覚の歪み）は筋トレで消せ！視野を広げろ！",
    category: "mindset",
  },
  {
    id: 19,
    text: "マンダラチャートは筋トレの設計図だ。細部まで描き切れ！",
    category: "discipline",
  },
  {
    id: 20,
    text: "現状維持は退化の始まり。常に重量を増やせ！",
    category: "training",
  },
  {
    id: 21,
    text: "行動経済学が教える - 筋トレは最高の自己投資だ！",
    category: "mindset",
  },
  {
    id: 22,
    text: "認知の歪みは筋肉の歪みと同じ。フォームを正せ！",
    category: "discipline",
  },
  {
    id: 23,
    text: "習慣化の黄金比：21日間の継続が筋肉を変える！",
    category: "discipline",
  },
  {
    id: 24,
    text: "目標なき筋トレは時間の浪費だ。まずはゴールを設定しろ！",
    category: "mindset",
  },
  {
    id: 25,
    text: "脳が認識できる情報は0.00001%。筋トレでRASを覚醒させろ！",
    category: "motivation",
  },
  {
    id: 26,
    text: "行動習慣の形成に必要なのは66日。筋トレで思考回路を作り直せ！",
    category: "discipline",
  },
  {
    id: 27,
    text: "1%の改善を毎日積み重ねろ。それが最強の複利効果を生む！",
    category: "mindset",
  },
  {
    id: 28,
    text: "メタ認知が弱いなら、まず筋肉を認知しろ！",
    category: "training",
  },
  {
    id: 29,
    text: "PDCAは筋トレの基本。計画なき失敗に価値なし！",
    category: "discipline",
  },
  {
    id: 30,
    text: "アンカリングバイアスを破壊しろ！限界は幻想だ！",
    category: "mindset",
  },
  {
    id: 31,
    text: "成長曲線は対数関数。壁を超えるたびに筋肉は育つ！",
    category: "motivation",
  },
  {
    id: 32,
    text: "フロー状態は最高のトレーニング。没入しろ！",
    category: "training",
  },
  {
    id: 33,
    text: "ストレッチゾーンで成長しろ。快適な場所に居座るな！",
    category: "discipline",
  },
  {
    id: 34,
    text: "脳の可塑性は筋肉と同じ。使えば使うほど発達する！",
    category: "mindset",
  },
  {
    id: 35,
    text: "パフォーマンスゾーンとラーニングゾーンを使い分けろ！",
    category: "training",
  },
];

const getRandomMessageByCategory = (category) => {
  const filteredMessages = botMessages.filter(
    (msg) => msg.category === category
  );
  if (filteredMessages.length === 0) {
    return "その悩みも筋トレで解決できます！まずは体を動かしてみましょう！";
  }
  const randomIndex = Math.floor(Math.random() * filteredMessages.length);
  return filteredMessages[randomIndex].text;
};

const getMessageByKeyword = (keyword) => {
  if (
    keyword.includes("ギャンブル") ||
    keyword.includes("スロット") ||
    keyword.includes("競馬") ||
    keyword.includes("パチンコ") ||
    keyword.includes("競艇") ||
    keyword.includes("パチスロ") ||
    keyword.includes("オートレース") ||
    keyword.includes("競輪") ||
    keyword.includes("宝くじ") ||
    keyword.includes("ロト") ||
    keyword.includes("TOTO") ||
    keyword.includes("BIG") ||
    keyword.includes("カジノ") ||
    keyword.includes("IR") ||
    keyword.includes("ブラックジャック") ||
    keyword.includes("ポーカー") ||
    keyword.includes("バカラ") ||
    keyword.includes("ルーレット") ||
    keyword.includes("闇カジノ") ||
    keyword.includes("ジャグラー") ||
    keyword.includes("北斗の拳") ||
    keyword.includes("花の慶次") ||
    keyword.includes("牙狼") ||
    keyword.includes("シンフォギア") ||
    keyword.includes("大当たり") ||
    keyword.includes("確変") ||
    keyword.includes("天井") ||
    keyword.includes("三連単") ||
    keyword.includes("三連複") ||
    keyword.includes("馬券") ||
    keyword.includes("WIN5") ||
    keyword.includes("単勝") ||
    keyword.includes("複勝") ||
    keyword.includes("ワイド") ||
    keyword.includes("馬連") ||
    keyword.includes("馬単") ||
    keyword.includes("フライング") ||
    keyword.includes("イン逃げ") ||
    keyword.includes("スタート展示") ||
    keyword.includes("モーター") ||
    keyword.includes("出走表") ||
    keyword.includes("着順") ||
    keyword.includes("車券") ||
    keyword.includes("脚質") ||
    keyword.includes("ライン") ||
    keyword.includes("ゴール前") ||
    keyword.includes("落車") ||
    keyword.includes("予想") ||
    keyword.includes("オンラインカジノ") ||
    keyword.includes("チップ") ||
    keyword.includes("持ち玉") ||
    keyword.includes("軍資金") ||
    keyword.includes("ギャンブル依存症") ||
    keyword.includes("爆勝ち") ||
    keyword.includes("全ツッパ") ||
    keyword.includes("ツモ") ||
    keyword.includes("ボーダー") ||
    keyword.includes("レバーオン")

  ) {
    return "期待値計算してますか？数学的思考が大事です。筋トレで脳を鍛えれば計算力も上がります！";
  }
  const filteredMessages = botMessages.filter((msg) =>
    msg.text.includes(keyword)
  );
  if (filteredMessages.length === 0) {
    return getRandomMessageByCategory("motivation");
  }
  const randomIndex = Math.floor(Math.random() * filteredMessages.length);
  return filteredMessages[randomIndex].text;
};

module.exports = {
  getRandomMessageByCategory,
  getMessageByKeyword,
};
