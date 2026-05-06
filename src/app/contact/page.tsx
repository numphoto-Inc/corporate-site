import { redirect } from 'next/navigation';

async function submitContactForm(formData: FormData) {
  'use server';
  const body = new URLSearchParams();
  formData.forEach((value, key) => body.append(key, value.toString()));
  await fetch('https://ssgform.com/s/vqxS7p1i8Aoz', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  redirect('/contact/thanks');
}

export default function ContactPage() {
  const inquiryTypes = ['企業研修', '撮影', 'その他'];
  const referrals = [
    '名刺交換をした',
    '知人から紹介された',
    '検索で知った',
    'X（旧Twitter）で知った',
    'Facebookで知った',
    'Instagramで知った',
    'メディアの記事で知った',
    '他のメディアで紹介されていた',
    'その他',
  ];

  const labelClass = 'text-sm tracking-[0.15em] text-base-content flex items-center gap-2';
  const inputClass = 'w-full border-b border-base-300 bg-transparent py-3.5 text-base text-base-content placeholder:text-base-content/25 focus:outline-none focus:border-base-content transition-colors';
  const requiredBadge = <span className="text-xs text-error font-medium">必須</span>;

  return (
    <main className="pt-20 md:pt-24 text-base-content font-light leading-relaxed">

        {/* Breadcrumb */}
        <div className="px-6 md:px-12 py-4 border-b border-base-200">
          <nav className="text-xs text-base-content/40 tracking-wide font-sans flex items-center gap-2">
            <a href="/" className="hover:text-base-content transition-colors">ホーム</a>
            <span>/</span>
            <span className="text-base-content/60">お問い合わせ</span>
          </nav>
        </div>

        {/* Page Title */}
        <div className="px-6 md:px-12 lg:px-24 py-14 md:py-20 border-b border-base-200">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em]">お問い合わせ</h1>
          <p className="mt-6 text-base text-base-content/55 leading-[2.2]">
            研修・撮影のご依頼、資料請求など、お気軽にご連絡ください。<br />
            通常2〜3営業日以内にご返信いたします。
          </p>
        </div>

        {/* Form */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto">
            <form
              action={submitContactForm}
              className="space-y-12"
            >

              {/* お問い合わせの種類 */}
              <fieldset>
                <legend className="text-sm tracking-[0.15em] text-base-content mb-5 flex items-center gap-2">
                  お問い合わせの種類 {requiredBadge}
                </legend>
                <div className="flex flex-wrap gap-6">
                  {inquiryTypes.map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="お問い合わせの種類"
                        value={type}
                        required
                        className="w-5 h-5 accent-base-content cursor-pointer"
                      />
                      <span className="text-base text-base-content/70 group-hover:text-base-content transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="border-t border-base-200" />

              {/* 会社名 */}
              <div className="space-y-2">
                <label className={labelClass}>会社名 {requiredBadge}</label>
                <input type="text" name="会社名" required placeholder="株式会社ナムフォト" className={inputClass} />
              </div>

              {/* ご担当者名 */}
              <div className="space-y-2">
                <label className={labelClass}>ご担当者名 {requiredBadge}</label>
                <input type="text" name="ご担当者名" required placeholder="写真 太郎" className={inputClass} />
              </div>

              {/* ふりがな */}
              <div className="space-y-2">
                <label className={labelClass}>ふりがな {requiredBadge}</label>
                <input type="text" name="ふりがな" required placeholder="しゃしんたろう" className={inputClass} />
              </div>

              {/* 部署名 */}
              <div className="space-y-2">
                <label className={labelClass}>部署名</label>
                <input type="text" name="部署名" placeholder="人事部 / 経営企画部" className={inputClass} />
              </div>

              {/* メールアドレス */}
              <div className="space-y-2">
                <label className={labelClass}>メールアドレス {requiredBadge}</label>
                <input type="email" name="メールアドレス" required placeholder="info@example.com" className={inputClass} />
              </div>

              {/* 電話番号 */}
              <div className="space-y-2">
                <label className={labelClass}>電話番号 {requiredBadge}</label>
                <input type="tel" name="電話番号" required placeholder="03-0000-0000" className={inputClass} />
              </div>

              {/* ご予算 */}
              <div className="space-y-2">
                <label className={labelClass}>ご予算</label>
                <input type="text" name="ご予算" placeholder="例：50万円程度、未定" className={inputClass} />
              </div>

              {/* ご希望時期 */}
              <div className="space-y-2">
                <label className={labelClass}>ご希望時期</label>
                <input type="text" name="ご希望時期" placeholder="例：2026年8月頃、未定" className={inputClass} />
              </div>

              {/* お問い合わせ内容 */}
              <div className="space-y-2">
                <label className={labelClass}>お問い合わせ内容 {requiredBadge}</label>
                <textarea
                  name="お問い合わせ内容"
                  required
                  rows={6}
                  placeholder="ご相談内容をご記入ください。"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="border-t border-base-200" />

              {/* ナムフォトを知ったきっかけ */}
              <fieldset>
                <legend className="text-sm tracking-[0.15em] text-base-content mb-5 flex items-center gap-2">
                  ナムフォトを知ったきっかけ {requiredBadge}
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {referrals.map((ref) => (
                    <label key={ref} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="ナムフォトを知ったきっかけ"
                        value={ref}
                        required
                        className="w-5 h-5 accent-base-content cursor-pointer shrink-0"
                      />
                      <span className="text-base text-base-content/70 group-hover:text-base-content transition-colors">{ref}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="border-t border-base-200 pt-10">
                <div className="group nav-link-container inline-block w-full sm:w-auto border border-base-content">
                  <div className="submit-flash-layer" />
                  <button
                    type="submit"
                    className="relative z-10 px-14 py-5 text-base tracking-[0.2em] font-medium block w-full group-hover:bg-primary"
                  >
                    <span className="submit-btn-label">送信する →</span>
                  </button>
                </div>
                <p className="mt-6 text-sm text-base-content/40 leading-[2.0]">
                  送信いただいた個人情報は、お問い合わせへの返答目的のみに使用し、第三者への提供は行いません。<br />
                  <a href="/privacy" className="underline underline-offset-4 hover:text-base-content transition-colors">
                    プライバシーポリシー
                  </a>をあわせてご確認ください。
                </p>
              </div>

            </form>
          </div>
        </section>

    </main>
  );
}
