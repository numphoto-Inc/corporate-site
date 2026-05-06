const PDF_PATH = '/numphoto-service-guide20260428_x8K92LmQs.pdf';

export default function ServiceguideThanksPage() {
  return (
    <main className="pt-20 md:pt-24 text-base-content font-light leading-relaxed">

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-base-200">
        <nav className="text-xs text-base-content/40 tracking-wide font-sans flex items-center gap-2">
          <a href="/" className="hover:text-base-content transition-colors">ホーム</a>
          <span>/</span>
          <a href="/serviceguide" className="hover:text-base-content transition-colors">資料ダウンロード</a>
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
            資料のご準備が<br />できました。
          </h1>

          <div className="space-y-6 text-base text-base-content/70 leading-[2.2]">
            <p>
              写真心理学®︎を用いた企業研修資料をご用意しました。
            </p>
            <p>
              写真心理学®︎は、写真を通じてメンバー同士の価値観や認知傾向を可視化し、<br className="hidden sm:block" />
              対話や創造性を促進するプログラムです。
            </p>
            <p>
              研修内容や導入イメージの参考として、ご活用いただけましたら幸いです。
            </p>
          </div>

          {/* Download CTA */}
          <div className="mt-12 py-10 px-8 bg-base-200/40 border border-base-200">
            <p className="text-xs tracking-[0.2em] text-base-content/50 mb-6 font-sans">
              資料をダウンロード
            </p>
            <a
              href={PDF_PATH}
              download
              className="group nav-link-container inline-block border border-base-content bg-white"
            >
              <span className="relative z-10 px-12 py-4 text-xs tracking-[0.2em] font-bold block group-hover:text-white transition-colors duration-500">
                PDFをダウンロードする →
                <span className="absolute inset-0 bg-base-content translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
              </span>
            </a>
            <p className="mt-6 text-[10px] text-base-content/40 leading-relaxed">
              ※ ご入力いただいたメールアドレスにも、資料URLをお送りしております。
            </p>
          </div>

          <div className="mt-12">
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
