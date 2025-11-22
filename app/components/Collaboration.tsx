export default function Collaboration() {
  const collaborations = [
    {
      title: "アイデア段階のPoCを一緒に形にする",
      content: `「こういう業務、AIで自動化できないかな?」
「このプロセス、いつも人間が判断しているけど、ルールとAIでだいぶ圧縮できそう」

といったラフな相談から、小さめのPoCプランを切り出し、試作まで並走します。

案件というより"共同実験"に近いイメージのものが多いです。`,
    },
    {
      title: "既存のPoC(例:AISEN)を自社環境で試してみる",
      content: `AISENのようなプロトタイプを、自社でテスト導入してみたい。
実際の業務メールでどれくらいタスク整理がうまくいくか試したい。

こういった「実験台になってくれるチーム」も歓迎しています。`,
    },
    {
      title: "将来のプロダクト・事業化を見据えた相談",
      content: `「今すぐ開発発注」というよりも、

将来こういうプロダクトを事業化できないか。
まずはPoCでリスク低めに試したい。

という話を、一緒に分解して設計する相手として使ってもらうイメージです。`,
    },
  ];

  return (
    <section id="collaboration" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center mb-6">
          いまのVirexと一緒にできること
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          いまのフェーズのVirexは、
          「ガチガチの受託開発会社」でも「コンサルファーム」でもありません。
          <br />
          <br />
          その代わりに、こんなことなら一緒にやれます。
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collaborations.map((item, index) => (
            <div key={index} className="card">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-bold text-lg mb-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
