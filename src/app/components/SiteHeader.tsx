'use client';

import { useState, useEffect } from 'react';

const navItems: { name: string; href: string; highlight?: boolean }[] = [
  { name: '会社紹介', href: '/about' },
  { name: 'サービス', href: '/#service' },
  { name: '実績', href: '/#cases' },
  { name: '連載', href: '/#series' },
  { name: '10th Anniversary', href: '/#about', highlight: true },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200">
        <div className="w-full px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <a href="/" className="hover:opacity-70 transition-opacity">
              <img src="/logo.png" alt="numphoto" className="h-6 md:h-8 w-auto object-contain" />
            </a>
            <div className="hidden md:block w-px h-4 bg-base-300" />
            <div className="text-[10px] md:text-xs tracking-widest text-base-content/60 font-light">
              写真心理学を用いた企業研修 | 撮影
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="group nav-link-container px-4 py-2">
                <div className="flash-layer" />
                <a
                  href={item.href}
                  className={`relative z-10 text-xs tracking-[0.15em] font-medium transition-colors duration-100 group-hover:text-base-content ${
                    item.highlight ? 'text-secondary border-b border-secondary/30' : 'text-base-content/70'
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div className="group nav-link-container ml-4 border border-base-content">
              <div className="submit-flash-layer" />
              <a
                href="/contact"
                className="relative z-10 px-6 py-2.5 text-[10px] tracking-[0.2em] font-bold block group-hover:bg-primary"
              >
                <span className="submit-btn-label">お問い合わせ</span>
              </a>
            </div>
          </nav>
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-base-content/70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-base-100/95 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute top-20 md:top-24 left-0 w-full flex flex-col items-center gap-0 transition-all duration-300 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full text-center py-5 text-sm tracking-[0.2em] font-medium border-b border-base-200 transition-colors hover:bg-base-200 ${
                item.highlight ? 'text-secondary' : 'text-base-content/80'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 mb-10 px-12 py-3 border border-base-content text-xs tracking-[0.25em] font-bold hover:bg-base-content hover:text-base-100 transition-colors"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </>
  );
}
