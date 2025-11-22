import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Virex | 試すスピードで、AIプロダクトを量産するスタジオ",
  description: "Virexは、AI×Web開発で小さなプロダクトやPoCを高速に形にする実験スタジオです。AISENなどのプロトタイプを通じて、どこに本当にニーズがあるかを検証しています。",
  keywords: ["AI", "PoC", "プロトタイプ", "AISEN", "業務改善", "タスク管理"],
  authors: [{ name: "Virex" }],
  openGraph: {
    title: "Virex | 試すスピードで、AIプロダクトを量産するスタジオ",
    description: "Virexは、AI×Web開発で小さなプロダクトやPoCを高速に形にする実験スタジオです。AISENなどのプロトタイプを通じて、どこに本当にニーズがあるかを検証しています。",
    url: "https://virex.example.com",
    siteName: "Virex",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virex | 試すスピードで、AIプロダクトを量産するスタジオ",
    description: "Virexは、AI×Web開発で小さなプロダクトやPoCを高速に形にする実験スタジオです。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
