'use client';

import Script from 'next/script';
import { useRef } from 'react';

const SITE_KEY = '6LcidtosAAAAAF-xUI1mcjF8MdD_wpivAvo03ZYJ';

export function RecaptchaForm({
  ssgformUrl,
  className,
  children,
}: {
  ssgformUrl: string;
  className?: string;
  children: React.ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const token: string = await new Promise((resolve) => {
      (window as any).grecaptcha.ready(async () => {
        const t = await (window as any).grecaptcha.execute(SITE_KEY, { action: 'submit' });
        resolve(t);
      });
    });

    if (tokenRef.current) {
      tokenRef.current.value = token;
    }

    // ネイティブsubmit（onSubmitを再発火させずssgform.comへPOST）
    formRef.current?.submit();
  }

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} />
      <form
        ref={formRef}
        action={ssgformUrl}
        method="POST"
        onSubmit={handleSubmit}
        className={className}
      >
        <input ref={tokenRef} type="hidden" name="g-recaptcha-response" defaultValue="" />
        {children}
      </form>
    </>
  );
}
