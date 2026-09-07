import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  department?: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const message = body.message?.trim() ?? '';
  const company = body.company?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const department = body.department?.trim() ?? '';

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: 'Missing or invalid fields.' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error('Contact form: SMTP env vars are not configured.');
    return Response.json({ error: 'Mail service is not configured.' }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const lines = [
    `Ime i prezime: ${name}`,
    company && `Firma: ${company}`,
    phone && `Telefon: ${phone}`,
    `Email: ${email}`,
    department && `Odeljenje: ${department}`,
    '',
    'Poruka:',
    message,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nova poruka sa sajta - ${name}`,
      text: lines.join('\n'),
    });
  } catch (err) {
    console.error('Contact form: failed to send email.', err);
    return Response.json({ error: 'Failed to send message.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
