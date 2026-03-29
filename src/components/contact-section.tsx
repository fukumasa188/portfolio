'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground">
            お気軽にご連絡ください。
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-lg font-medium">送信しました！</p>
            <p className="text-muted-foreground mt-2">
              お問い合わせいただきありがとうございます。折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                お名前
              </label>
              <Input
                id="name"
                placeholder="お名前を入力"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                メールアドレス
              </label>
              <Input
                id="email"
                type="email"
                placeholder="taro@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                メッセージ
              </label>
              <Textarea
                id="message"
                placeholder="お気軽にメッセージをどうぞ..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
