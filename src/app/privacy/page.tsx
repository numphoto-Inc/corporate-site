export default function PrivacyPage() {
  return (
    <main className="pt-20 md:pt-24 text-base-content font-light leading-relaxed">

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-base-200">
        <nav className="text-xs text-base-content/40 tracking-wide font-sans flex items-center gap-2">
          <a href="/" className="hover:text-base-content transition-colors">ホーム</a>
          <span>/</span>
          <span className="text-base-content/60">プライバシーポリシー</span>
        </nav>
      </div>

      {/* Page Title */}
      <div className="px-6 md:px-12 lg:px-24 py-14 md:py-20 border-b border-base-200">
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em]">プライバシーポリシー</h1>
        <p className="mt-6 text-sm text-base-content/55 leading-[2.2]">
          Privacy Policy
        </p>
      </div>

      {/* Content */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto space-y-14">

          <p className="text-base leading-[2.2] text-base-content/80">
            株式会社ナムフォト（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報の保護を推進致します。
          </p>

          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.2em] font-medium border-l-2 border-base-content pl-4">
              個人情報の管理
            </h2>
            <p className="text-base leading-[2.2] text-base-content/75 pl-4">
              当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社内での管理徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.2em] font-medium border-l-2 border-base-content pl-4">
              個人情報の利用目的
            </h2>
            <p className="text-base leading-[2.2] text-base-content/75 pl-4">
              お客さまからご提供いただいた個人情報は、お問い合わせへの返答および当社サービスの提供・改善のために利用します。お客さまの同意なく、第三者に提供することはありません。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.2em] font-medium border-l-2 border-base-content pl-4">
              個人情報の第三者への提供
            </h2>
            <p className="text-base leading-[2.2] text-base-content/75 pl-4">
              当社は、お客さまの個人情報を、お客さまの同意なく第三者に提供することはありません。ただし、法令に基づく場合はこの限りではありません。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.2em] font-medium border-l-2 border-base-content pl-4">
              個人情報の開示・訂正・削除
            </h2>
            <p className="text-base leading-[2.2] text-base-content/75 pl-4">
              お客さまからご提供いただいた個人情報の開示・訂正・削除をご希望の場合は、下記のお問い合わせ窓口までご連絡ください。合理的な期間内に対応いたします。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.2em] font-medium border-l-2 border-base-content pl-4">
              法令・規範の遵守と見直し
            </h2>
            <p className="text-base leading-[2.2] text-base-content/75 pl-4">
              当社は、保有する個人情報に関して適用される日本の法令およびその他の規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm tracking-[0.2em] font-medium border-l-2 border-base-content pl-4">
              お問い合わせ窓口
            </h2>
            <div className="text-base leading-[2.2] text-base-content/75 pl-4 space-y-1">
              <p>株式会社ナムフォト</p>
              <p>メール：<a href="mailto:info@numphoto.com" className="underline underline-offset-4 hover:text-base-content transition-colors">info@numphoto.com</a></p>
              <p>電話：070-4535-0836（平日10:00–18:00）</p>
            </div>
          </div>

          <p className="text-xs text-base-content/35 tracking-wide pt-4 border-t border-base-200">
            制定日：2016年1月1日　最終改定：2026年1月1日
          </p>

        </div>
      </section>

    </main>
  );
}
