import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const viewport: Viewport = {
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: "株式会社ナムフォト | 写真心理学を用いた企業研修 | ブランド撮影",
  description: "写真を使ったチームビルディング研修を提供。創造的な対話を通じて組織開発や相互理解、メタ認知を促進します。写真心理学では、撮影者の価値観を紐解きます。実績：TIS、NEC、京都リサーチパーク等、2000名以上に提供。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full" data-theme="numphoto-theme">
      <body className="min-h-screen bg-base-100 font-sans selection:bg-primary selection:text-primary-content antialiased flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
