export default function Prototypes() {
  return (
    <section id="prototypes" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          進行中のプロトタイプ・PoC
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="card">
            <div className="mb-4">
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                プロトタイプ
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                AISEN(アイセン)
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                Gmail×AIで、受信メールを「やるべきタスク」に変える
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                AISENは、毎日届くメールの中から、
                「やらないといけないこと」「確認だけでいいもの」「後でいいもの」を
                AIが自動で分類し、アイセンハワーマトリクスのボードに整理してくれるツールです。
              </p>

              <ul className="space-y-2 pl-5">
                <li className="list-disc">
                  受信トレイをそのままタスク管理にしている人の「カオス」を解消したい。
                </li>
                <li className="list-disc">
                  タスク管理ツールに転記する手間をなくしたい。
                </li>
                <li className="list-disc">
                  忙しい人でも、"今やるべき数個"だけに集中できる状態をつくりたい。
                </li>
              </ul>

              <p className="pt-2">
                そんな狙いで、PoCとして開発・検証を進めています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
