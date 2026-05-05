export default function TtCoachPage() {
  const rows = [
    {
      label: '販売業者',
      value: '株式会社ナムフォト',
    },
    {
      label: '代表責任者',
      value: '中村侑子',
    },
    {
      label: '所在地',
      value: '東京都目黒区目黒2-11-3 印刷工場1階',
    },
    {
      label: '電話番号',
      value: '070-4535-0836',
      sub: 'お客様対応時間：平日 10:00–18:00',
    },
    {
      label: 'メールアドレス',
      value: 'info@numphoto.com',
      link: 'mailto:info@numphoto.com',
    },
    {
      label: 'サイトURL',
      value: 'https://numphoto.com/',
      link: 'https://numphoto.com/',
    },
    {
      label: 'サービス名',
      value: '写真心理学®コーチング',
    },
    {
      label: '販売価格（税込）',
      content: (
        <table className="w-full text-sm border border-base-300">
          <thead>
            <tr className="bg-base-200/60">
              <th className="py-2 px-4 text-left font-medium tracking-wide border-r border-base-300">プラン</th>
              <th className="py-2 px-4 text-left font-medium tracking-wide border-r border-base-300">定価</th>
              <th className="py-2 px-4 text-left font-medium tracking-wide">LINE初回特典</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-base-300">
              <td className="py-2.5 px-4 border-r border-base-300">写真心理学®ライト</td>
              <td className="py-2.5 px-4 border-r border-base-300">22,000円</td>
              <td className="py-2.5 px-4">15,400円</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="py-2.5 px-4 border-r border-base-300">写真心理学®スタンダード</td>
              <td className="py-2.5 px-4 border-r border-base-300">33,000円</td>
              <td className="py-2.5 px-4">23,100円</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="py-2.5 px-4 border-r border-base-300">21日間変化プログラム</td>
              <td className="py-2.5 px-4 border-r border-base-300">58,000円</td>
              <td className="py-2.5 px-4">40,600円</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      label: '商品代金以外に\n必要な料金',
      list: [
        '銀行振込の場合の振込手数料',
        'インターネット接続に必要な通信料等（お客様負担）',
      ],
    },
    {
      label: 'お支払い方法・\nお支払いの時期',
      value: '写真投稿から3営業日以内（銀行振込 / クレジットカードを選択）',
    },
    {
      label: '返品・\nキャンセル（特約）',
      content: (
        <div className="space-y-4">
          <p>24時間前まで無料、以降キャンセル料100%（リスケは1回まで無料）</p>
          <table className="w-full text-sm border border-base-300">
            <thead>
              <tr className="bg-base-200/60">
                <th className="py-2 px-4 text-left font-medium tracking-wide border-r border-base-300 w-40">タイミング</th>
                <th className="py-2 px-4 text-left font-medium tracking-wide">返金</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-base-300">
                <td className="py-2.5 px-4 border-r border-base-300">24時間前まで</td>
                <td className="py-2.5 px-4">全額返金</td>
              </tr>
              <tr className="border-t border-base-300">
                <td className="py-2.5 px-4 border-r border-base-300">24時間以降</td>
                <td className="py-2.5 px-4">返金不可</td>
              </tr>
            </tbody>
          </table>
          <ul className="space-y-1 text-base-content/65 text-sm">
            <li>・返金時の振込手数料はお客様負担となります</li>
            <li>・当社都合で開催できない場合は全額返金いたします</li>
          </ul>
        </div>
      ),
    },
    {
      label: 'お問い合わせ窓口',
      value: '電話・メールにて承ります（上記連絡先参照）',
    },
  ];

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
              { name: '会社紹介', href: '/about' },
              { name: 'サービス', href: '/#service' },
              { name: '実績', href: '/#cases' },
              { name: '連載', href: '/#series' },
              { name: '10th Anniversary', href: '/#about', highlight: true },
            ].map((item) => (
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
            <span className="text-base-content/60">特定商取引法に基づく表記（コーチング）</span>
          </nav>
        </div>

        {/* Page Title */}
        <div className="px-6 md:px-12 lg:px-24 py-14 md:py-20 border-b border-base-200">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em]">特定商取引法に基づく表記</h1>
          <p className="mt-4 text-base text-base-content/50 tracking-[0.1em]">写真心理学®コーチング</p>
        </div>

        {/* Table */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-t border-base-200 align-top">
                    <th className="py-5 pr-6 text-left text-xs tracking-[0.15em] text-base-content/60 font-medium whitespace-pre-line w-36 md:w-48 shrink-0">
                      {row.label}
                    </th>
                    <td className="py-5 text-base-content/80 leading-[2.0]">
                      {row.content ? (
                        row.content
                      ) : row.list ? (
                        <ul className="space-y-1">
                          {row.list.map((item) => (
                            <li key={item}>・{item}</li>
                          ))}
                        </ul>
                      ) : row.link ? (
                        <a href={row.link} className="underline underline-offset-4 hover:text-base-content transition-colors">
                          {row.value}
                        </a>
                      ) : (
                        <>
                          <span>{row.value}</span>
                          {row.sub && <span className="block text-sm text-base-content/50 mt-1">{row.sub}</span>}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-16 text-xs text-base-content/35 tracking-wide pt-6 border-t border-base-200">
              制定日：2016年1月1日　最終改定：2026年1月1日
            </p>
          </div>
        </section>

        <footer className="py-14 text-center border-t border-base-200 mt-20">
          <div className="text-[9px] text-base-content/30 tracking-[0.3em] uppercase font-sans">
            © 2026 numphoto Inc.
          </div>
        </footer>
      </main>
    </div>
  );
}
