'use server';

import { redirect } from 'next/navigation';

export async function submitServiceguideForm(formData: FormData) {
  const body = new URLSearchParams();
  formData.forEach((value, key) => body.append(key, value.toString()));
  await fetch('https://ssgform.com/s/vqxS7p1i8Aoz', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    redirect: 'manual',
  });
  redirect('/serviceguide/thanks');
}
