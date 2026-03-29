'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success: boolean;
  error?: string;
};

export async function sendContactEmail(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: '全ての項目を入力してください。' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'fukuyoshi.dev@gmail.com',
      subject: `【ポートフォリオ】${name}さんからのお問い合わせ`,
      replyTo: email,
      text: `名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: '送信に失敗しました。時間をおいて再度お試しください。' };
  }
}
