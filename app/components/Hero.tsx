export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6">
          <p className="text-primary-600 font-semibold text-lg mb-4">
            Virex(ヴィレックス)
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            AIで仕事をラクにする、
            <br className="hidden sm:block" />
            お試し開発の専門チーム。
          </h1>
        </div>

        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          Virexは、「とりあえずやってみたい」をそのまま流さず、
          <br className="hidden sm:block" />
          AIを使った小さなツールやシステムをどんどん形にして、
          <br className="hidden sm:block" />
          実際に使ってもらいながら検証しているチームです。
          <br />
          <br />
          まだ完璧なサービスではなく、試作品の段階。
          <br className="hidden sm:block" />
          だからこそ、早くつくって、早く触って、早く失敗することに全振りしています。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#prototypes" className="btn-primary">
            進行中のお試しツールを見る
          </a>
          <a href="#contact" className="btn-secondary">
            お試し開発の相談をする
          </a>
        </div>
      </div>
    </section>
  );
}
