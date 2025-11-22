export default function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Virexはいま、AIを使った「小さなお試し開発（PoC）」を量産している段階です。
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="section-text">
            Virexは、いきなり大きなサービスを作るのではなく、
            <br />
            「これ、AIでやったらだいぶ楽になるんじゃない？」
            <br />
            「この業務、みんなめんどくさがってるよね？」
            <br />
            といったアイデアを、小さなお試し版（PoC）として素早く形にして、
            現場で試してもらうことに全振りしています。
          </p>

          <div className="card bg-blue-50 border-primary-200 mt-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-primary-600 mr-2">💡</span>
              PoC（ピー・オー・シー）とは？
            </h3>
            <p className="text-gray-700 leading-relaxed">
              本番のシステムをいきなり作る前に、
              まずは<strong>小さく作って、現場で試してみるためのお試し版</strong>のことです。
              <br />
              Virexは、このPoCをたくさん回すことで、
              「本当に役に立つAIの使い方」を見つけていきます。
            </p>
          </div>

          <p className="section-text">
            いまは、完成されたサービスをドーンと売る会社というより、
            <br />
            「AIを使ったお試しツールのタネを量産している工場」くらいに思ってもらった方が正確です。
          </p>
        </div>
      </div>
    </section>
  );
}
