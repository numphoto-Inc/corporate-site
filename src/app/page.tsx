'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SLIDES = [
  {
    image: '/query01.png',
    number: '01',
    lines: ['メンバーの「違い」は、生産性を妨げますか？', '創造性の源ですか？'],
    sub: '写真で価値観を可視化し、心理的安全性を醸成。',
    imgClass: 'object-cover',
    bg: '',
  },
  {
    image: '/query02.png',
    number: '02',
    lines: ['キャリアシートでは見えない「個の強み」を', 'どれだけ把握していますか？'],
    sub: '写真心理学で、メンバーの価値観と創造性を分析',
    imgClass: 'object-contain',
    bg: 'bg-base-100',
  },
  {
    image: '/query03.png',
    number: '03',
    lines: ['新規事業に欠かせない「観察力」と「発想力」を', 'センスの問題で終わらせていませんか？'],
    sub: '固定観念を外し、問いを立てる力をアップデート',
    imgClass: 'object-cover',
    bg: '',
  },
] as const;

const CASE_CATEGORIES = [
  {
    label: '相互理解・チームビルディング',
    cases: [
      {
        slug: 'tis02',
        image: '/works_01.jpg',
        client: 'TIS株式会社',
        title: 'ジェネラルマネージャー&新入社員にインタビュー。コロナ禍の社内コミュニケーションとオンボーディング支援の実態',
      },
      {
        slug: '202106-krp',
        image: '/works_02.jpg',
        client: '京都リサーチパーク株式会社',
        title: '初対面でも関係性が深まる「miit」導入インタビュー',
      },
      {
        slug: 'godot',
        image: '/works_03.jpg',
        client: '株式会社Godot',
        title: '行動科学の最先端企業"Godot" 外国人×日本人のチームビルディング！',
      },
    ],
  },
  {
    label: '知性や感性の深堀り',
    cases: [
      {
        slug: 'comany',
        image: '/works_04.jpg',
        client: 'コマニー株式会社',
        title: '社員総数1200名分の1が、"写真対話"することで生まれる力',
      },
      {
        slug: 'tis-202012',
        image: '/works_05.jpg',
        client: 'TIS株式会社',
        title: '写真とインタビューを使ったワークでお互いの深堀り',
      },
    ],
  },
  {
    label: '新規事業のための創造性開発',
    cases: [
      {
        slug: 'nec-plm01',
        image: '/works_06.jpg',
        client: '日本電気株式会社（NEC）',
        title: '第二創業期を迎えるNEC「PLMシステムグループ」の組織課題と、miitに期待したことは？ 〜マネージャーと若手の視点から【前半】',
      },
      {
        slug: 'nec-plm02',
        image: '/works_07.jpg',
        client: '日本電気株式会社（NEC）',
        title: '次世代をリードする若手にインタビュー。miitの写真心理学体験は、実際どうだった？【後半】',
      },
      {
        slug: 'bootcamp',
        image: '/works_08.jpg',
        client: 'TIS株式会社',
        title: '写真ワークショップが、新規事業に貢献できる！？ TIS導入レポート',
      },
    ],
  },
] as const;

const COLUMNS = [
  {
    slug: 'sasaharayuko',
    image: '/interview_01.jpg',
    name: '笹原 優子',
    affiliation: 'NTTドコモ・ベンチャーズ 代表取締役',
    quote: '社会との関わり方を発見！これまでにない角度で、褒められた気分です',
  },
  {
    slug: 'kojimakenji',
    image: '/interview_02.jpg',
    name: '小島 健嗣',
    affiliation: '元 富士フイルムOpen innovation Hub館長 / designMeME',
    quote: '個人の気づきをメタファー化した写真心理学は、共感・共創を生むきっかけになる',
  },
  {
    slug: 'shioura',
    image: '/interview_03.jpg',
    name: '塩浦 政也',
    affiliation: '建築家',
    quote: '"写真"を因数分解して、社会に役立つツールとして再構築している点が面白い！',
  },
  {
    slug: 'yamane',
    image: '/interview_04.jpg',
    name: '山根 承子',
    affiliation: '行動経済学者',
    quote: '写真の撮影枚数は幸福度と強く相関しているんです',
  },
] as const;

export default function NumPhoto10thFullPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 要素の浮き上がりアニメーション
      const revealElements = document.querySelectorAll('.js-reveal');
      revealElements.forEach((el) => {
        gsap.fromTo(el, 
          { y: 40, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      });

      // SVG ラインアートのドローアニメーション
      gsap.from(".js-svg-draw", {
        strokeDashoffset: 800,
        strokeDasharray: 800,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".p-logic__iceberg",
          start: "top 75%",
        }
      });

      // 10th 背景テキストのパララックス
      gsap.to(".p-anniversary__bg-text", {
        y: -100,
        scrollTrigger: {
          trigger: ".p-anniversary",
          start: "top bottom",
          scrub: 1,
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-base-100 font-sans selection:bg-primary selection:text-primary-content">
      
      {/* --- HEADER (NASU構成) --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200">
        <div className="w-full px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          
          {/* 左側：ロゴエリア */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <a href="/" className="hover:opacity-70 transition-opacity">
              <img 
                src="/logo.png" 
                alt="numphoto"
                className="h-6 md:h-8 w-auto object-contain" 
              />
            </a>
            <div className="hidden md:block w-px h-4 bg-base-300"></div>
            <div className="text-[10px] md:text-xs tracking-widest text-base-content/60 font-light">
              写真心理学を用いた企業研修 | 撮影
            </div>
          </div>

          {/* 右側：メニュー */}
          <nav className="hidden lg:flex items-center gap-4">
            {[
              { name: '会社概要', href: '#about' },
              { name: 'サービス', href: '#service' },
              { name: '実績', href: '#cases' },
              { name: '連載', href: '#series' },
              { name: '10th Anniversary', href: '#anniversary', highlight: true },
            ].map((item) => (
              <div key={item.name} className="group nav-link-container px-4 py-2">
                <div className="flash-layer"></div>
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
              <div className="flash-layer"></div>
              <a 
                href="#contact" 
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

      <main ref={mainRef} className="text-base-content font-light leading-relaxed overflow-x-hidden pt-20 md:pt-24">

        {/* Slideshow Hero */}
        <section className="relative w-full h-[80vh] min-h-[480px] overflow-hidden border-b border-base-200">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.number}
              aria-hidden={i !== currentSlide}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide.bg} ${
                i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className={`w-full h-full ${slide.imgClass}`}
              />
              <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 px-8 md:px-24">
                <div className="bg-base-content/50 backdrop-blur-md px-7 py-5 max-w-lg">
                  <span className="block text-[9px] tracking-[0.45em] text-white/40 mb-3 font-sans uppercase">
                    Query {slide.number}
                  </span>
                  <p className="text-white text-base md:text-xl font-light leading-[1.9] mb-3">
                    {slide.lines[0]}<br />{slide.lines[1]}
                  </p>
                  <p className="text-white/55 text-xs md:text-sm font-light tracking-wide">
                    ―― {slide.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-8 right-8 md:right-24 z-20 flex gap-2 items-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="py-3 px-1 group"
                aria-label={`スライド ${i + 1}`}
              >
                <div className={`h-[2px] transition-all duration-500 ${
                  i === currentSlide
                    ? 'w-12 bg-primary'
                    : 'w-5 bg-white/40 group-hover:bg-white/70'
                }`} />
              </button>
            ))}
          </div>
        </section>

        {/* 2. 10th Anniversary Message */}
        <section id="anniversary" className="p-anniversary relative py-[30vh] px-8 md:px-24">
          <div className="p-anniversary__bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-bold text-base-200/50 -z-10 leading-none pointer-events-none">
            10th
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="js-reveal text-xs tracking-[0.4em] text-base-content/40 mb-12 uppercase italic font-sans">Anniversary Message</p>
            <h3 className="js-reveal text-2xl md:text-4xl font-light mb-20 tracking-[0.1em] leading-[1.8]">
              写真を撮れば、視点が変わる。<br />
              関係性も、カルチャーも変わる。
            </h3>
            <div className="js-reveal text-base-content/70 space-y-12 text-sm md:text-base leading-[2.4] text-left md:text-center italic max-w-2xl mx-auto">
              <p>株式会社ナムフォトは、10周年を迎えました。</p>
              <p>私たちは「写真心理学」という独自のメソッドを通じて、<br className="hidden md:block" />目に見えない「心の解像度」を上げるお手伝いをしてきました。</p>
              <p className="font-bold text-base-content not-italic mt-16 text-lg tracking-[0.2em] border-t border-base-200 pt-12">
                VISION: 写真の力で、アイが巡るセカイをつくろう。
              </p>
            </div>
          </div>
        </section>

        {/* 3. Logic 01: コミュニケーションエラーの構造 */}
        <section className="p-logic py-32 px-8 md:px-24 bg-base-200/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="js-reveal">
              <span className="text-[10px] font-bold text-base-content/30 mb-6 block tracking-widest uppercase font-sans">Logic 01</span>
              <h3 className="text-xl md:text-2xl font-light mb-8 border-l border-base-content pl-6 leading-relaxed">
                氷山の「水面下」にある<br />前提のズレを可視化する。
              </h3>
              <p className="text-base-content/60 text-sm leading-[2.4]">
                仕事の摩擦は、表面的なスキルの問題ではなく、その下にある「個別の解釈（見ている景色）」の違いから生まれます。写真心理学はこれを写し出し、対話の土台を築きます。
              </p>
            </div>

            {/* 氷山ラインアート */}
            <div className="p-logic__iceberg js-reveal">
              <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-sm mx-auto">
                <path className="js-svg-draw text-base-content" d="M160 20 L268 112 L52 112 Z" stroke="currentColor" strokeWidth="1" />
                <line x1="8" y1="122" x2="312" y2="122" stroke="currentColor" strokeDasharray="6 5" strokeWidth="0.8" className="text-base-content/30" />
                <path className="js-svg-draw text-base-content/40" d="M52 132 L268 132 L308 262 L12 262 Z" stroke="currentColor" strokeWidth="0.8" />
                <text x="160" y="100" textAnchor="middle" fontSize="12" fill="currentColor" className="text-base-content font-sans">行動・言動</text>
                <text x="160" y="208" textAnchor="middle" fontSize="12" fill="currentColor" className="text-base-content/60 font-sans">価値観・解釈の癖</text>
              </svg>
            </div>
          </div>
        </section>

        {/* --- CQプロセスの4段階セクション --- */}
        <section id="service" className="py-32 bg-base-100 px-8 md:px-24 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24 js-reveal">
              <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-4 uppercase font-sans">Process</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em]">
                「違い」を力に変える <br className="md:hidden" />
                <span className="font-medium">CQプロセスの4段階</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-base-200 border border-base-200">
              {[
                { step: '01', title: '内省', desc: '写真を撮ることで、自分でも気づかなかった無意識な関心を言語化します。' },
                { step: '02', title: '開示', desc: '撮った写真を共有し、自分の「世界の捉え方」をフラットに提示します。' },
                { step: '03', title: '対話', desc: '他者の写真を通じ、自分とは異なる視点や解釈の存在を心から尊重します。' },
                { step: '04', title: '共創', desc: '多様な視点が混ざり合うことで、一人では到達できない新しいアイデアが生まれます。' },
              ].map((item) => (
                <div key={item.step} className="bg-base-100 pt-12 pb-20 px-8 group relative overflow-hidden transition-all duration-500 hover:bg-base-200/30">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:animate-flash-shimmer pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <span className="block font-mono text-5xl text-base-content/10 mb-8 transition-colors group-hover:text-primary-content">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold mb-6 tracking-wider text-base-content">{item.title}</h3>
                    <p className="text-xs text-base-content/60 leading-[2] font-light">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-700 group-hover:w-full"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center js-reveal">
              <p className="text-sm text-base-content/40 font-light italic font-sans">
                ※CQ（Cultural Intelligence）: 多様な文化的背景において効果的に機能する能力
              </p>
            </div>
          </div>
        </section>

        {/* アプリ紹介 */}
        <section className="py-24 md:py-36 px-8 md:px-24 border-b border-base-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[55fr_45fr] gap-16 md:gap-24 items-center">
            <div className="js-reveal">
              <h1 className="text-2xl md:text-[28px] font-medium leading-snug tracking-tight mb-6">
                写真心理学AI診断アプリ：ナムフォト
              </h1>
              <p className="text-base md:text-lg font-light leading-[2] text-base-content/80 mb-8">
                3枚の&ldquo;心が震えた&rdquo;写真から、<br />
                撮影者の価値観や創造性タイプを診断します。
              </p>
              <p className="text-sm text-base-content/60 leading-[2.4] mb-8">
                研修プログラムは重たいな...<br />
                そんなチームや現場でも、アプリを使えば気軽に写真心理学を利用することができます。
              </p>
              <ul className="text-sm text-base-content/70 space-y-2 leading-relaxed">
                <li>・チームの1on1や雇用ツールとして</li>
                <li>・他の研修のアイスブレイクとして</li>
              </ul>
            </div>

            {/* スマホモックアップ */}
            <div className="flex justify-center md:justify-end js-reveal">
              <div className="relative w-[210px] h-[420px] border-2 border-base-content rounded-[38px] bg-base-100 shadow-xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-[5px] bg-base-content rounded-full" />
                <div className="absolute top-11 bottom-7 left-3 right-3 flex flex-col gap-2.5">
                  <div className="flex-[2] bg-base-200/30 border border-base-200 rounded-xl flex items-center justify-center">
                    <span className="text-[10px] text-base-content/20 italic font-sans">numphoto app</span>
                  </div>
                  <div className="h-7 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 導入事例 */}
        <section id="cases" className="py-32 px-8 md:px-24 bg-base-100 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20 js-reveal">
              <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-4 uppercase font-sans">Case Studies</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em]">導入事例のご紹介</h2>
            </div>

            <div className="space-y-16">
              {CASE_CATEGORIES.map((cat) => (
                <div key={cat.label} className="js-reveal">
                  <h3 className="text-sm font-bold tracking-[0.12em] text-base-content pb-5 border-b-2 border-base-content mb-8">
                    {cat.label}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                    {cat.cases.map((c) => (
                      <a
                        key={c.slug}
                        href={`https://miit.jp/works/${c.slug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 group p-3 -mx-3 hover:bg-base-200/50 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 w-28 h-[78px] overflow-hidden bg-base-200">
                          <img
                            src={c.image}
                            alt={c.client}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-bold text-base-content mb-1 leading-snug">{c.client}</p>
                          <p className="text-xs font-light leading-[1.75] text-base-content/50 line-clamp-3">
                            {c.title}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* コラム：写真心理学について、もっと深く知る */}
        <section id="series" className="py-32 px-8 md:px-24 bg-base-200/30 border-b border-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 js-reveal">
              <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-4 uppercase font-sans">Column</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em]">写真心理学について、もっと深く知る</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 js-reveal">
              {COLUMNS.map((col) => (
                <a
                  key={col.slug}
                  href={`https://miit.jp/column/${col.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-base-200 mb-4">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-base-content/50 font-sans mb-1 leading-snug">{col.affiliation}</p>
                  <p className="text-base font-bold text-base-content mb-2 tracking-wide">{col.name}</p>
                  <p className="text-xs font-light leading-[1.75] text-base-content/60 line-clamp-3 italic">
                    &ldquo;{col.quote}&rdquo;
                  </p>
                </a>
              ))}
            </div>

            {/* NewsPicks バナー */}
            <div className="js-reveal">
              <a
                href="https://newspicks.com/topics/photolabo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral text-neutral-content px-10 md:px-16 py-10 hover:opacity-90 transition-opacity"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <span className="text-[10px] tracking-[0.5em] font-bold font-sans opacity-50 uppercase shrink-0">NewsPicks TOPICS</span>
                  <span className="hidden md:block w-px h-8 bg-neutral-content/20" />
                  <span className="text-lg md:text-2xl font-light tracking-[0.05em] text-center md:text-left">
                    写真のこれまでと、「心理学」の可能性
                  </span>
                </div>
                <span className="text-xs tracking-[0.3em] opacity-50 font-sans uppercase shrink-0 group-hover:opacity-80 transition-opacity">
                  連載を読む →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* CEO Letter */}
        <section id="about" className="py-32 px-8 md:px-24 bg-base-100 border-b border-base-200">
          <div className="max-w-2xl mx-auto">

            <div className="mb-16 js-reveal">
              <span className="text-[10px] tracking-[0.4em] text-base-content/40 block mb-4 uppercase font-sans">Letter from CEO</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em]">10th Anniversary</h2>
            </div>

            {/* ブランド名の由来 */}
            <div className="js-reveal mb-14 pl-6 border-l-2 border-primary">
              <p className="text-[10px] tracking-[0.3em] text-base-content/40 mb-3 font-sans uppercase">About the Name</p>
              <p className="text-sm md:text-base leading-[2.6] text-base-content/80">
                ナムフォトとは、南無阿弥陀仏の「ナム」＋「フォト（写真）」から成り、<br className="hidden md:block" />
                「写真を心の拠り所として生きていきます」という意味があります。
              </p>
            </div>

            {/* 本文 */}
            <div className="js-reveal space-y-12 text-sm md:text-base leading-[2.6] text-base-content/70 mb-20">
              <p>
                2026年5月13日に10周年を迎えました。<br />
                2014年の11月、当時32歳だったときにガンが見つかり、<br />
                「写真を使って元気になる」という原体験をもとに起業しました。
              </p>

              <div>
                <h3 className="text-xs font-bold text-base-content tracking-[0.3em] mb-5 uppercase">原体験</h3>
                <p>
                  やったことは２つ。自分の遺影写真を撮ってもらったら、驚くほど元気そうな笑顔で「この人は大丈夫だ！」と生きる自信を得たこと。また、インスタグラムを開設して1日1枚写真をアップするうちに、「ガンでも珈琲美味しいなぁ」「ガンでも空がきれいだなぁ」と感じて「ガンでも幸せでいい」ことを実感しました。
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-base-content tracking-[0.3em] mb-5 uppercase">写真心理学の誕生</h3>
                <p>
                  マーケティングやSNSなど、誰かに「いいね」をもらうための外向きの表現ではなく、自分軸を取り戻し、社会に向かって再び表現を始めるための、内観や内省のツールとして写真は使える。こうした個人の体験を、誰もが活用できる再現性のあるメソッドとして体系化したのが「写真心理学」です。
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-base-content tracking-[0.3em] mb-5 uppercase">未来へ</h3>
                <p>
                  AIが当たり前になった時代において、効率的な仕事や作業はAIが代替してくれます。今後は、自分の価値観や感性を研ぎ澄ませ、それを言語化して社会に届ける力が大切になっていきます。
                </p>
                <p className="mt-8">
                  写真を使うことで、誰もが自分自身の内なる声に気づき、それを共通言語として分かち合うことで、一緒に働く仲間やチーム、社会と、より深いコミュニケーションをとることができます。
                </p>
                <p className="mt-8">
                  写真の力を、より一層多くの方に届けられるように一歩、一歩進めてまいります。
                </p>
              </div>
            </div>

            {/* 署名 */}
            <div className="js-reveal flex items-end justify-end gap-5 pt-10 border-t border-base-200">
              <div className="text-right">
                <p className="text-[10px] tracking-[0.25em] text-base-content/40 font-sans mb-0.5">株式会社ナムフォト</p>
                <p className="text-[10px] tracking-[0.25em] text-base-content/40 font-sans mb-4">代表取締役</p>
                <p className="text-2xl font-medium tracking-[0.2em]">楢 侑子</p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 bg-base-200 border border-base-200">
                <img src="/ceo.jpg" alt="楢 侑子" className="w-full h-full object-cover object-top" />
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="py-32 text-center border-t border-base-200">
          <div className="js-reveal">
            <p className="text-[10px] tracking-[0.5em] text-base-content/30 mb-12 uppercase italic font-sans">Get in Touch</p>
            <a href="mailto:info@numphoto.com" className="text-2xl md:text-5xl font-light hover:text-primary transition-colors underline-offset-[16px] underline decoration-base-200">
              Let's talk about culture.
            </a>
          </div>
          <div className="mt-24 text-[9px] text-base-content/30 tracking-[0.3em] uppercase font-sans">
            © 2026 numphoto Inc. 10th Anniversary
          </div>
        </footer>
      </main>
    </div>
  );
}