'use client';

import Script from 'next/script';

const SITE_KEY = '6LcidtosAAAAAF-xUI1mcjF8MdD_wpivAvo03ZYJ';

export function RecaptchaForm({
  action,
  className,
  children,
}: {
  action: (data: FormData) => Promise<void>;
  className?: string;
  children: React.ReactNode;
}) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const token: string = await new Promise((resolve) => {
      (window as any).grecaptcha.ready(async () => {
        const t = await (window as any).grecaptcha.execute(SITE_KEY, { action: 'submit' });
        resolve(t);
      });
    });

    const formData = new FormData(form);
    formData.set('g-recaptcha-response', token);
    await action(formData);
  }

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} />
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </>
  );
}
