export default function TokushoPage() {
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
      value: 'Yei! ポートレート / プロフィール写真',
    },
    {
      label: '販売価格（税込）',
      list: [
        'セレクト3プラン　35,200円（税込）',
        'セレクト24プラン　55,000円（税込）',
        'Allデータプラン　110,000円（税込）',
      ],
    },
    {
      label: '商品代金以外に\n必要な料金',
      list: [
        'スタジオ撮影ご希望の場合の別途費用',
        '東京23区以外での撮影の場合の交通費・出張費',
        '銀行振込の場合の振込手数料',
        'インターネット接続に必要な通信料等（お客様負担）',
      ],
    },
    {
      label: 'お支払い方法',
      list: [
        '銀行振込',
        'クレジットカード',
        '現金（撮影日当日のみ）',
      ],
    },
    {
      label: 'お支払い時期',
      list: [
        '撮影前（銀行振込 / クレジットカード）',
        '撮影日当日（現金）',
        '撮影後・写真納品前（銀行振込 / クレジットカード）',
      ],
    },
    {
      label: '提供期間',
      list: [
        'お客様のご都合のよい日程で撮影日を設定',
        '写真投稿（セレクト）から3営業日以内に納品',
      ],
    },
    {
      label: '返品・キャンセル',
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
    <main className="pt-20 md:pt-24 text-base-content font-light leading-relaxed">

        {/* Breadcrumb */}
        <div className="px-6 md:px-12 py-4 border-b border-base-200">
          <nav className="text-xs text-base-content/40 tracking-wide font-sans flex items-center gap-2">
            <a href="/" className="hover:text-base-content transition-colors">ホーム</a>
            <span>/</span>
            <span className="text-base-content/60">特定商取引法に基づく表記</span>
          </nav>
        </div>

        {/* Page Title */}
        <div className="px-6 md:px-12 lg:px-24 py-14 md:py-20 border-b border-base-200">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em]">特定商取引法に基づく表記</h1>
          <p className="mt-6 text-sm text-base-content/55 leading-[2.2]">
            Specified Commercial Transactions Act
          </p>
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

    </main>
  );
}
