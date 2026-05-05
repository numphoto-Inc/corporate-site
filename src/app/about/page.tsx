'use client';

import React, { useEffect, useRef, useState } from 'react';

const TABS = [
  { id: 'about', label: 'ナムフォトについて' },
  { id: 'philosophy', label: '写真心理学とは' },
  { id: 'company', label: '会社概要' },
  { id: 'history', label: '沿革' },
  { id: 'awards', label: '受賞歴' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const COMPANY_INFO = [
  { label: '会社名', value: '株式会社ナムフォト' },
  { label: '代表取締役', value: '楢 侑子' },
  { label: '所在地', value: '〒153-0063 東京都目黒区目黒 2-11-3 印刷工場1階' },
  { label: '創立', value: '2016年5月13日' },
  { label: '資本金', value: '300万円' },
  { label: '主な事業内容', value: '① 写真撮影及び写真教室開催\n② 研修、セミナー、講演及びカウンセリングの実施\n③ 現代人の幸福、生活に関する研究、コンテンツ企画、開発\n④ イベントの企画、運営\n⑤ 雑貨の製造及び販売\n⑥ 全各号に付帯または関連する一切の業務' },
  { label: 'インボイス登録番号', value: 'T7120001198278' },
  { label: '取引先', value: 'TIS・NEC・京都リサーチパーク・コマニー・ベネッセ・コーポレーション・三井不動産「WORK STYLING」（アソボット、カイケツ）・TRI-AD（現：ウーブン・バイ・トヨタ）・日建設計・大阪府・山口県阿武町・大阪府大東市・Lコネクト（京都府ひきこもり者の就労支援施設）・株式会社コトラボ・株式会社東京ランドスケープ研究所・一般社団法人マネージング・ノンプロフィット・一般社団法人ソトノバ 他多数' },
] as const;

const HISTORY_ITEMS = [
  { year: '2000', desc: '代表が多摩美術大学・映像演劇学科で写真を学ぶ' },
  { year: '2002', desc: 'フォトグラファーの仕事をスタート' },
  { year: '2004', desc: 'MIXI、TOKYO FM、avexなどで、メディアの企画・編集に従事' },
  { year: '2010', desc: '地域創生ディレクターとしてまちづくりに従事。地域住民へ写真講座を提供' },
  { year: '2014', desc: '乳がんになって生き方と向き合い、アドラー心理学を100時間学ぶ' },
  { year: '2016', desc: '株式会社ナムフォトを設立' },
  { year: '2020', desc: '写真心理学®を提唱' },
  { year: '2025', desc: '心理学専門課程修了' },
] as const;

const AWARDS_ITEMS = [
  { date: '2018年3月6日', text: '新聞「富士ニュース」に掲載' },
  { date: '2018年1月10日', text: 'WEBメディア「ワコール ボディブック」インタビュー' },
  { date: '2017年12月31日・2018年1月7日', text: 'FMラジオ局 α-STATIONに出演（12/31 OA ／ 1/7 OA）' },
  { date: '2017年10月25日', text: '京都新聞に掲載' },
] as const;

const FAQ_ITEMS = [
  {
    q: '写真が「上手い」「下手」が、プログラムに関係するのでは？',
    a: '関係しません。「上手い」「下手」という評価は一つのフレームです。写真心理学ではこうした評価を超えた手法で写真を分析します。',
  },
  {
    q: '診断結果は、iPhoneや一眼レフなど、カメラ機種に依存するのでは？',
    a: '全く影響がないわけではありませんが、それでも余りある価値観や概念化のパターン、思考癖が写真に表出されています。',
  },
  {
    q: '一度に何名くらいで実施できますか？',
    a: '標準は、10名２時間のプログラムです。これまでの実績は、5名〜35名です。AI診断が可能になったので、これ以上の人数にも対応できるようになりました。',
  },
] as const;

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  const aboutRef    = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const companyRef  = useRef<HTMLElement>(null);
  const historyRef  = useRef<HTMLElement>(null);
  const awardsRef   = useRef<HTMLElement>(null);

  const sectionMap: Record<TabId, React.RefObject<HTMLElement | null>> = {
    about:      aboutRef,
    philosophy: philosophyRef,
    company:    companyRef,
    history:    historyRef,
    awards:     awardsRef,
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TABS.forEach(({ id }) => {
      const el = sectionMap[id].current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
        { rootMargin: '-25% 0px -65% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id: TabId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-base-100 font-sans selection:bg-primary selection:text-primary-content">

      {/* HEADER */}
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
            {[
              { name: '会社概要', href: '/about' },
              { name: 'サービス', href: '/#service' },
              { name: '実績', href: '/#cases' },
              { name: '連載', href: '/#series' },
              { name: '10th Anniversary', href: '/#anniversary', highlight: true },
            ].map((item) => (
              <div key={item.name} className="group nav-link-container px-4 py-2">
                <div className="flash-layer" />
                <a
                  href={item.href}
                  className={`relative z-10 text-xs tracking-[0.15em] font-medium transition-colors duration-100 group-hover:text-base-content ${
                    item.highlight
                      ? 'text-secondary border-b border-secondary/30'
                      : 'text-base-content/70'
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div className="group nav-link-container ml-4 border border-base-content">
              <div className="flash-layer" />
              <a
                href="mailto:info@numphoto.com"
                className="relative z-10 px-6 py-2.5 text-[10px] tracking-[0.2em] font-bold block transition-colors duration-100 group-hover:text-base-100 group-hover:bg-base-content delay-300"
              >
                お問い合わせ
              </a>
            </div>
          </nav>
          <div className="lg:hidden">
            <button className="btn btn-ghost btn-sm text-base-content/70">MENU</button>
          </div>
        </div>
      </header>

      <main className="pt-20 md:pt-24 text-base-content font-light leading-relaxed">

        {/* Breadcrumb */}
        <div className="px-6 md:px-12 py-4 border-b border-base-200">
          <nav className="text-xs text-base-content/40 tracking-wide font-sans flex items-center gap-2">
            <a href="/" className="hover:text-base-content transition-colors">ホーム</a>
            <span>/</span>
            <span className="text-base-content/60">会社紹介</span>
          </nav>
        </div>

        {/* Page Title */}
        <div className="px-6 md:px-12 lg:px-24 py-14 md:py-20 border-b border-base-200">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em]">会社紹介</h1>
        </div>

        {/* Sticky Tab Navigation */}
        <div className="sticky top-[80px] md:top-[96px] z-40 bg-base-100/95 backdrop-blur-md border-b border-base-200">
          <div className="px-6 md:px-12 overflow-x-auto scrollbar-none">
            <div className="flex min-w-max">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  className={`px-5 md:px-7 py-4 text-[11px] tracking-[0.18em] font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-base-content text-base-content'
                      : 'border-transparent text-base-content/35 hover:text-base-content/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────────────────────── */}
        {/* Section 1: ナムフォトについて       */}
        {/* ───────────────────────────────── */}
        <section id="about" ref={aboutRef} className="py-24 px-6 md:px-12 lg:px-24 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">About</span>
            <h2 className="text-2xl md:text-3xl font-light mb-16 tracking-[0.05em]">ナムフォトについて</h2>

            <div className="max-w-3xl space-y-7 text-sm md:text-base leading-[2.4] text-base-content/75 mb-24">
              <p className="text-xl md:text-2xl font-light text-base-content leading-[1.7]">
                写真で創造性を育み、関係性を深める会社です。
              </p>
              <p>
                私たちは、「すべての人が表現し、お互いを生かし合う関係づくり」をミッションに活動しています。
              </p>
              <p>
                「表現は、ビジネスに必要ないのでは？」そう思われるかもしれませんが、<br />ビジネスの成功にこそ必要であることは明確です。
              </p>
              <p>
                MTGの冒頭のアイスブレイクで、<br />
                同僚が困っているとき、<br />
                新しい企画をプレゼンするとき、
              </p>
              <p>
                ビジネスシーンで前進する際に必ず「表現」が存在します。<br />
                上手さよりも「本音」が鍵を握る時代です。
              </p>
              <p>
                写真を使いながらビジネスパーソンの創造性を育み、相互理解を醸成し、<br />お客様のビジネスが成功するためのカルチャーに貢献します。
              </p>
            </div>

          </div>
        </section>

        {/* ───────────────────────────────── */}
        {/* Section: ナムフォトが届ける写真の価値 */}
        {/* ───────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-base-200/30 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">Value</span>
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-[0.05em]">ナムフォトが届ける 写真の価値</h2>
            <p className="text-sm md:text-base leading-[2.2] text-base-content/60 mb-20 max-w-xl">
              写真は、撮るものではありません。<br />
              内観・内省に向き合うための、鏡のような存在です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-base-300">
              {[
                {
                  title: '心の声に素直になろう',
                  desc: '世間の評価を脱ぎ捨てて、直感に従ってシャッターを切ることから始めよう。',
                  stroke: 'currentColor',
                },
                {
                  title: '他者との違いを楽しもう',
                  desc: '同じ時間・場所にいても、異なる視点。この違いを対話の糸口にしよう。',
                  stroke: '#b3a000',
                },
                {
                  title: '結果もプロセスも大切に',
                  desc: '導き出した答えと同じくらい、迷ったり、感じたりした過程を愛でよう。',
                  stroke: '#9B8BBB',
                },
              ].map((item) => (
                <div key={item.title} className="bg-base-100 px-10 py-14 flex flex-col items-center text-center gap-8">
                  <svg viewBox="0 0 64 52" fill="none" stroke={item.stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                    <rect x="2" y="13" width="60" height="36" rx="4" />
                    <path d="M21 13V9a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v4" />
                    <circle cx="32" cy="31" r="10" />
                    <circle cx="32" cy="31" r="5" />
                    <circle cx="52" cy="21" r="2" fill={item.stroke} stroke="none" />
                  </svg>
                  <div>
                    <p className="text-base font-medium tracking-wide mb-4">{item.title}</p>
                    <p className="text-sm text-base-content/55 leading-[2.2]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────── */}
        {/* Section 2: 写真心理学とは      */}
        {/* ───────────────────────────── */}
        <section id="philosophy" ref={philosophyRef} className="py-24 px-6 md:px-12 lg:px-24 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-light mb-16 tracking-[0.05em]">写真心理学とは</h2>

            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-20">
              {/* 左：テキスト */}
              <div>
                <p className="text-sm md:text-base text-base-content/55 mb-12 leading-[2.2]">
                  写真の3つの効果を用いたフレームワークです。
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    '私と社会を繋ぐ効果',
                    '私の心と言葉を繋ぐ効果',
                    '私と相手を繋ぐ効果',
                  ].map((label, i) => (
                    <div key={i} className="flex items-baseline gap-4">
                      <span className="text-[10px] font-mono text-base-content/30 shrink-0">{i + 1}.</span>
                      <p className="text-sm text-base-content/70 leading-relaxed">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-base-content/45 leading-[2.2] pt-6 border-t border-base-200">
                  写真心理学プログラムは、この3つの効果を引き出す設計になっています。
                </p>
              </div>

              {/* 右：図 */}
              <div>
              <svg viewBox="0 0 390 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
                <defs>
                  <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0.5 L0,5.5 L6,3 z" fill="#1a1a1a" />
                  </marker>
                </defs>

                {/* 外円：社会（右下にオフセット） */}
                <circle cx="218" cy="228" r="172" fill="#b0b0b0" />
                <text x="298" y="125" fontSize="15" fill="#1a1a1a" fontFamily="sans-serif" textAnchor="middle">社会</text>

                {/* 私 */}
                <circle cx="144" cy="208" r="52" fill="#d4d4d4" />
                <text x="138" y="205" fontSize="13" fill="#1a1a1a" fontFamily="sans-serif" textAnchor="middle">私</text>

                {/* 言葉 */}
                <circle cx="177" cy="138" r="36" fill="#f0f0f0" />
                <text x="175" y="135" fontSize="13" fill="#1a1a1a" fontFamily="sans-serif" textAnchor="middle">言葉</text>

                {/* 写真 */}
                <circle cx="208" cy="204" r="36" fill="#fafafa" />
                <text x="208" y="208" fontSize="13" fill="#1a1a1a" fontFamily="sans-serif" textAnchor="middle">写真</text>

                {/* 三角形：●は各円の中心（私・言葉・写真）を指す */}
                <line x1="150" y1="188" x2="177" y2="155" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="177" y1="155" x2="202" y2="190" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="202" y1="190" x2="150" y2="188" stroke="#1a1a1a" strokeWidth="0.9" />
                <circle cx="150" cy="188" r="2.8" fill="#1a1a1a" />
                <circle cx="177" cy="155" r="2.8" fill="#1a1a1a" />
                <circle cx="202" cy="190" r="2.8" fill="#1a1a1a" />

                {/* Aさん */}
                <circle cx="295" cy="292" r="56" fill="#c4c4c4" />
                <text x="295" y="296" fontSize="13" fill="#1a1a1a" fontFamily="sans-serif" textAnchor="middle">Aさん</text>

                {/* 矢印：クラスター → Aさん */}
                <line x1="222" y1="232" x2="256" y2="262" stroke="#1a1a1a" strokeWidth="0.9" markerEnd="url(#arr)" />
              </svg>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────── */}
        {/* Section: 写真心理学診断とは */}
        {/* ──────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-base-200/30 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">Diagnosis</span>
            <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-[0.05em]">写真心理学診断とは</h2>
            <p className="text-sm md:text-base text-base-content/60 leading-[2.2] mb-16 max-w-2xl">
              2000名2万3000枚の写真分析と、神経心理学や知覚認知心理学のロジックを素に開発。<br />
              写真を14項目の定量診断によって解析しています。
            </p>

            {/* フロー図 */}
            <div className="overflow-x-auto">
              <div className="min-w-[560px] flex gap-4 items-stretch">

                {/* 左側：2段 */}
                <div className="flex flex-col gap-3 flex-1">

                  {/* 私（外枠）＋ 3ステップ（内包） */}
                  <div className="border border-base-300 bg-base-100 px-4 pt-4 pb-4">
                    <p className="text-sm font-bold tracking-[0.2em] text-center mb-3">私</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { step: '1.知覚 認知', sub: '感覚受容器', quote: '「空が青い！」' },
                        { step: '2.理解 判断', sub: '脳', quote: '「写真撮ろう」' },
                        { step: '3.表現 実行', sub: '運動神経系', quote: 'シャッターを押す' },
                      ].map((item) => (
                        <div key={item.step} className="border border-base-300 bg-base-200 px-4 py-4 flex flex-col gap-3">
                          <p className="text-[11px] text-base-content/50 tracking-wide">{item.step}</p>
                          <p className="text-sm font-medium">{item.sub}</p>
                          <p className="text-xs text-base-content/50">{item.quote}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 下向き矢印 */}
                  <div className="flex justify-center text-base-content/30 text-lg leading-none">▼</div>

                  {/* 写真 */}
                  <div className="border border-base-300 bg-base-100 py-6 flex items-center justify-center">
                    <span className="text-sm font-bold tracking-[0.2em]">写真</span>
                  </div>
                </div>

                {/* 右向き矢印 */}
                <div className="flex items-center text-base-content/30 text-lg shrink-0">▶</div>

                {/* 右側：写真心理学診断 */}
                <div className="border border-base-300 bg-base-100 px-7 py-6 flex flex-col justify-center gap-4 w-48 shrink-0">
                  <p className="text-sm font-bold tracking-[0.2em] text-center">写真心理学<span className="align-super text-[8px]">®</span>診断</p>
                  <div>
                    <p className="text-sm font-bold leading-snug mb-4">
                      定量分析<br />-14項目-
                    </p>
                    <div className="space-y-1.5 text-[11px] text-base-content/55">
                      <p>WHY：撮影動機</p>
                      <p>HOW：撮り方の特徴</p>
                      <p>WHAT：被写体の特徴</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ──────────────── */}
        {/* Section: よくあるご質問 */}
        {/* ──────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-light mb-16 tracking-[0.05em]">よくあるご質問</h2>
            <dl className="divide-y divide-base-200">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="grid md:grid-cols-[2fr_3fr] gap-6 py-8">
                  <dt className="text-sm font-medium text-base-content leading-[1.9]">Q. {item.q}</dt>
                  <dd className="text-sm text-base-content/60 leading-[2.2]">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─────────────── */}
        {/* Section 3: 会社概要 */}
        {/* ─────────────── */}
        <section id="company" ref={companyRef} className="py-24 px-6 md:px-12 lg:px-24 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">Company</span>
            <h2 className="text-2xl md:text-3xl font-light mb-16 tracking-[0.05em]">会社概要</h2>
            <dl className="divide-y divide-base-200">
              {COMPANY_INFO.map((item) => (
                <div key={item.label} className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] py-6 gap-6">
                  <dt className="text-xs tracking-[0.15em] text-base-content/45 font-sans font-medium pt-0.5 shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-base-content/80 leading-[1.9] whitespace-pre-line">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ──────────── */}
        {/* Section 4: 沿革 */}
        {/* ──────────── */}
        <section id="history" ref={historyRef} className="py-24 px-6 md:px-12 lg:px-24 bg-base-200/30 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">History</span>
            <h2 className="text-2xl md:text-3xl font-light mb-16 tracking-[0.05em]">沿革</h2>
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-[76px] md:left-[92px] top-3 bottom-3 w-px bg-base-300" />
              <div className="space-y-0">
                {HISTORY_ITEMS.map((item, i) => (
                  <div key={i} className="relative grid grid-cols-[84px_1fr] md:grid-cols-[100px_1fr] gap-6 py-6">
                    <div className="text-right pr-1">
                      <span className="text-[11px] font-mono text-base-content/40 tracking-wider">{item.year}</span>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute -left-[4.5px] top-[5px] w-[9px] h-[9px] rounded-full bg-base-100 border border-base-content/25" />
                      <p className="text-sm text-base-content/70 leading-[1.95]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────── */}
        {/* Section 5: 受賞歴 */}
        {/* ──────────────── */}
        <section id="awards" ref={awardsRef} className="py-24 px-6 md:px-12 lg:px-24 border-b border-base-200">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-5 uppercase font-sans">Press &amp; Awards</span>
            <h2 className="text-2xl md:text-3xl font-light mb-16 tracking-[0.05em]">受賞・掲載歴</h2>
            <dl className="divide-y divide-base-200">
              {AWARDS_ITEMS.map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[220px_1fr] py-7 gap-1.5 md:gap-8 items-baseline">
                  <dt className="text-[11px] font-mono text-base-content/40 tracking-wider">{item.date}</dt>
                  <dd className="text-sm text-base-content/70 leading-[1.9]">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-base-200/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 md:gap-6">
            <a
              href="mailto:info@numphoto.com"
              className="group border border-base-content p-8 flex items-center justify-between hover:bg-base-content hover:text-base-100 transition-colors duration-200"
            >
              <span className="text-sm font-medium tracking-[0.12em]">お問い合わせ</span>
              <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="/#service"
              className="group border border-base-300 p-8 flex items-center justify-between hover:border-base-content transition-colors duration-200"
            >
              <span className="text-sm font-medium tracking-[0.12em]">サービス紹介</span>
              <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <div className="border border-base-200 p-8 bg-base-100 space-y-3">
              <p className="text-[10px] tracking-[0.3em] text-base-content/40 uppercase font-sans">Document</p>
              <a
                href="mailto:info@numphoto.com"
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                無料で見積もり・相談する
              </a>
              <a
                href="mailto:info@numphoto.com"
                className="block text-xs text-base-content/45 hover:text-base-content transition-colors"
              >
                研修プログラムの詳細資料 →
              </a>
            </div>
          </div>
        </section>

        <footer className="py-14 text-center border-t border-base-200">
          <div className="text-[9px] text-base-content/30 tracking-[0.3em] uppercase font-sans">
            © 2026 numphoto Inc.
          </div>
        </footer>
      </main>
    </div>
  );
}
