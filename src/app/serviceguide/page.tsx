'use client';
import { useState, useEffect } from 'react';
import { submitServiceguideForm } from './actions';

const documentImages = [
  '/numphoto-service-guid.001.png',
  '/numphoto-service-guid.005.png',
  '/numphoto-service-guid..006.png',
  '/numphoto-service-guid..009.png',
  '/numphoto-service-guid..015.png',
  '/numphoto-service-guid..024.png',
  '/numphoto-service-guid..026.png',
  '/numphoto-service-guide.023.png',
];

const STACK_SIZE = 3;
const INTERVAL_MS = 8000;
const FADE_MS = 600;

const cardRotations = ['-rotate-2', 'rotate-1', '-rotate-[0.5deg]'];
const cardTranslates = ['-translate-x-2 translate-y-2', 'translate-x-1 translate-y-1', ''];

export default function DownloadPage() {
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

  const [startIndex, setStartIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setStartIndex(prev => (prev + STACK_SIZE) % documentImages.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const currentGroup = Array.from({ length: STACK_SIZE }, (_, i) =>
    documentImages[(startIndex + i) % documentImages.length]
  );

  const labelClass = 'text-sm tracking-[0.15em] text-base-content flex items-center gap-2';
  const inputClass = 'w-full border-b border-base-300 bg-transparent py-3.5 text-base text-base-content placeholder:text-base-content/25 focus:outline-none focus:border-base-content transition-colors';
  const requiredBadge = <span className="text-xs text-error font-medium">必須</span>;

  return (
    <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* 左側：テキストと資料縦積みプレビュー */}
            <div className="lg:w-1/2 lg:sticky lg:top-32">
              <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em] leading-tight">
                写真心理学を用いた<br />
                企業研修資料<br />
                ダウンロードフォーム
              </h1>
              <p className="mt-10 text-base text-base-content/60 leading-[2.2] max-w-lg">
                写真心理学研修プログラムの概要や、活用している心理学フレームワーク、解決できる組織課題などをまとめた資料です。楽しく・深い変容が起こる研修をお探しの際には、ご参考ください。
              </p>

              {/* 資料縦積みプレビュー */}
              <div
                className="mt-14 flex flex-col gap-3 w-48"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity ${FADE_MS}ms ease-in-out`,
                }}
              >
                {currentGroup.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className={`relative w-full aspect-video overflow-hidden shadow-md border border-base-200 bg-white ${cardRotations[i]} ${cardTranslates[i]}`}
                  >
                    <img
                      src={src}
                      alt={`資料ページ ${startIndex + i + 1}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 右側：フォーム */}
            <div className="lg:w-1/2 w-full bg-base-50 p-8 md:p-12 border border-base-200">
              <h2 className="text-xl tracking-[0.1em] mb-12 border-b border-base-content/10 pb-6 font-medium">
                写真心理学を用いた研修サービスの紹介
              </h2>

              <form
                action={submitServiceguideForm}
                className="space-y-10"
              >
                <div className="space-y-2">
                  <label className={labelClass}>会社名 {requiredBadge}</label>
                  <input type="text" name="会社名" required placeholder="株式会社ナムフォト" className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>ご担当者名 {requiredBadge}</label>
                  <input type="text" name="ご担当者名" required placeholder="写真 太郎" className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>メールアドレス {requiredBadge}</label>
                  <input type="email" name="メールアドレス" required placeholder="info@example.com" className={inputClass} />
                </div>

                <fieldset>
                  <legend className="text-sm tracking-[0.15em] text-base-content mb-6 flex items-center gap-2">
                    ナムフォトを知ったきっかけ {requiredBadge}
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {referrals.map((ref) => (
                      <label key={ref} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="ナムフォトを知ったきっかけ"
                          value={ref}
                          required
                          className="w-4 h-4 accent-base-content cursor-pointer shrink-0"
                        />
                        <span className="text-sm text-base-content/70 group-hover:text-base-content transition-colors">{ref}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="pt-10">
                  <div className="group nav-link-container inline-block w-full border border-base-content bg-white overflow-hidden relative">
                    <button
                      type="submit"
                      className="relative z-10 px-10 py-5 text-sm tracking-[0.2em] font-bold block w-full hover:text-white transition-colors duration-500"
                    >
                      資料をダウンロードする →
                      <div className="absolute inset-0 bg-base-content translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
                    </button>
                  </div>
                  <p className="mt-6 text-[10px] text-base-content/40 leading-relaxed">
                    ※送信後、自動返信メールにてダウンロードURLをお送りします。<br />
                    個人情報は適切に管理し、弊社のサービス案内にのみ利用させていただきます。
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
  );
}
