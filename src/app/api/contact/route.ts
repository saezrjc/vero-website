import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

async function sendTelnyxSms(text: string): Promise<void> {
  const apiKey = process.env.TELNYX_API_KEY;
  const fromNumber = process.env.TELNYX_FROM_NUMBER;
  const toNumber = process.env.TELNYX_TO_NUMBER;

  if (!apiKey || !fromNumber || !toNumber) {
    console.warn("Telnyx env vars missing — SMS skipped");
    return;
  }

  const res = await fetch("https://api.telnyx.com/v2/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ from: fromNumber, to: toNumber, text }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Telnyx SMS error:", res.status, body);
    throw new Error(`Telnyx error ${res.status}`);
  }
}

export async function POST(req: NextRequest) {
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const smsText = `📬 Nuevo mensaje en veronicaperozo.com\nDe: ${name} <${email}>\n\n${message.slice(0, 300)}`;

  try {
    await sendTelnyxSms(smsText);
  } catch {
    return NextResponse.json({ error: "No se pudo enviar la notificación" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
