export default function WhyPoC() {
  return (
    <section id="why-poc" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          いきなり"立派なサービス"にしない理由
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="section-text">
            AIまわりのプロダクトは、机上のアイデアと、現場での手応えがズレやすい分野です。
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
            このパターンを避けるために、Virexは最初から
            「小さくつくって、少人数に当てて、フィードバックをもらう」ことを前提に動いています。
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
            そのサイクルを、高速で何周も回すこと自体を、
            Virexのコア活動にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
