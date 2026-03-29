import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "福吉 真之 | CEO / フルスタックデベロッパー",
  description: "スタートアップ経営とフルスタック開発。AIアプリ・越境EC等の実績。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} dark antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
