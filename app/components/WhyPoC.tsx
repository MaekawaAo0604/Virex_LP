export default function WhyPoC() {
  return (
    <section id="why-poc" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          なぜ、いきなり本番ではなく「小さなお試し開発（PoC）」から始めるのか
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="section-text">
            AIまわりのプロダクトは、机上のアイデアと現場での手ごたえがズレやすい分野です。
          </p>

          <ul className="space-y-3 mb-6 pl-5">
            <li className="list-disc text-lg text-gray-700">
              使ってみたら、思ったよりみんな触らない。
            </li>
            <li className="list-disc text-lg text-gray-700">
              現場のフローに噛み合わなくて、結局スプレッドシートに戻る。
            </li>
            <li className="list-disc text-lg text-gray-700">
              「すごいけど、別にいらないよね」で終わる。
            </li>
          </ul>

          <p className="section-text">
            そこでVirexは、最初から「小さなお試し開発（PoC）」を前提に動きます。
            <br />
            数か月でPoCをつくり、少人数の現場に当てて、率直なフィードバックをもらう。
            <br />
            良さそうならPoCを育てて本番に近づけ、微妙ならそのPoCは畳む。
          </p>

          <div className="card bg-white mt-8">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-700">数ヶ月でPoCをつくる。</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-700">ガチガチに作り込まない。</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-700">良さそうなら伸ばす、ダメなら畳む。</span>
              </li>
            </ul>
          </div>

          <p className="section-text mt-6">
            この「PoCを高速で何本も回すこと」自体を、Virexの核心にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
