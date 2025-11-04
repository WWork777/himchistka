// app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // простая валидация
    if (!name || !email) {
      return NextResponse.json(
        { error: "Имя и email обязательны" },
        { status: 400 }
      );
    }
    const msg = (message || "").toString();
    if (msg.length > 5000) {
      return NextResponse.json(
        { error: "Сообщение слишком длинное" },
        { status: 400 }
      );
    }

    // антиспам: простая проверка частоты (опционально через headers)
    // const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    // SMTP транспорт
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: 465, // true для 465, иначе false
      auth: {
        user: "sersur42@yandex.ru",
        pass: "xidetvxcflvenyqk",
      },
    });

    // письмо
    const to = "kirdoc55@mail.ru";
    const from = "sersur42@yandex.ru";

    const subject = `Заявка с сайта: ${name}`;
    const text = [
      `Имя: ${name}`,
      `Email: ${email}`,
      `Сообщение:`,
      msg || "(пусто)",
    ].join("\n");

    const html = `
      <div style="font:14px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial">
        <h2 style="margin:0 0 8px">Заявка с сайта</h2>
        <p><b>Имя:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Сообщение:</b></p>
        <pre style="white-space:pre-wrap;margin:0;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(
          msg || ""
        )}</pre>
      </div>
    `;

    await transporter.sendMail({ to, from, subject, text, html });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT_FORM_ERROR:", err);
    return NextResponse.json(
      { error: "Ошибка отправки письма" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
