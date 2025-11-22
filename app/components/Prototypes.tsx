export default function Prototypes() {
  return (
    <section id="prototypes" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          進行中のプロトタイプ・PoC
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <a
            href="https://aisen.virex-ai.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
          >
            <div className="mb-4">
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                プロトタイプ
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                AISEN（アイゼン）
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                Gmail×AIで、受信メールを「やるべきタスク」に変える
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Gmailで飛んでくる「やっといて」が、アイゼンハワーマトリクスに自動で並ぶツール。
                いまは実験版として、少人数チームでの試験導入を進めています。
              </p>

              <ul className="space-y-2 pl-5 mb-4">
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

              <p className="text-sm font-medium text-primary-600 flex items-center">
                <span className="mr-2">→</span>
                https://aisen.virex-ai.jp
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
