import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const viewport: Viewport = {
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: "numphoto",
  description: "写真心理学を用いた企業研修・撮影",
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
