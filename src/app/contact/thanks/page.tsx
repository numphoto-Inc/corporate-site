export default function ContactThanksPage() {
  return (
    <main className="pt-20 md:pt-24 text-base-content font-light leading-relaxed">

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-base-200">
        <nav className="text-xs text-base-content/40 tracking-wide font-sans flex items-center gap-2">
          <a href="/" className="hover:text-base-content transition-colors">ホーム</a>
          <span>/</span>
          <a href="/contact" className="hover:text-base-content transition-colors">お問い合わせ</a>
          <span>/</span>
          <span className="text-base-content/60">送信完了</span>
        </nav>
      </div>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto">

          <p className="text-[10px] tracking-[0.3em] text-base-content/40 uppercase font-sans mb-6">
            Thank you
          </p>
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.06em] leading-tight mb-12">
            お問い合わせ<br />ありがとうございます。
          </h1>

          <div className="space-y-8 text-base text-base-content/70 leading-[2.2]">
            <p>
              お問い合わせ内容を送信しました。
            </p>
            <p>
              内容を確認の上、担当者よりご連絡いたします。<br />
              お問い合わせ内容によっては、お返事まで数営業日いただく場合がございます。<br />
              もし数日経っても返信が届かない場合は、<br className="hidden sm:block" />
              迷惑メールフォルダをご確認の上、お手数ですが再度お問い合わせください。
            </p>
            <p className="pt-4 border-t border-base-200 text-base-content/55">
              この度は、写真心理学®︎にご関心をお寄せいただき、ありがとうございました。
            </p>
          </div>

          <div className="mt-16">
            <a
              href="/"
              className="group nav-link-container inline-block border border-base-content"
            >
              <span className="relative z-10 px-12 py-4 text-xs tracking-[0.2em] font-medium block group-hover:text-white transition-colors duration-500">
                ← ホームへ戻る
                <span className="absolute inset-0 bg-base-content translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
              </span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
