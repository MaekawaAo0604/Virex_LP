"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center mb-6">
          PoC・実験の相談、歓迎しています。
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          「この業務、AIで試しにやってみたらどうなる?」
          <br />
          「AISENみたいなツールを、自社向けに試してみたい」
          <br />
          <br />
          そんなラフなレベルからで大丈夫です。
          <br />
          下のフォームに、いまの状況と「気になっていること」をそのまま書いて送ってください。
          <br />
          <br />
          内容を拝見して、PoCとして一緒にやれそうか、
          他の選択肢の方が良さそうかも含めて、正直に返信します。
        </p>

        {submitted && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-primary-100 border border-primary-300 rounded-lg text-primary-700 text-center">
            送信完了(ダミー) - 実際の送信機能は未実装です
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto card"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                会社名・所属 <span className="text-gray-500 text-sm">(任意)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                placeholder="気になっていることをそのまま書いてください"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn-primary text-center"
              >
                送信する
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
