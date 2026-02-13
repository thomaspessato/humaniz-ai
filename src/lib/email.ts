import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend() {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const FROM_EMAIL = process.env.EMAIL_FROM || "Humaniz.ai <onboarding@resend.dev>";

function getAppUrl() {
  if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${getAppUrl()}/verify-email?token=${token}`;

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Verifique seu email — Humaniz.ai",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;">
            <span style="color: white; font-size: 24px;">✨</span>
          </div>
          <h1 style="margin: 16px 0 8px; font-size: 24px; color: #111827;">Humaniz.ai</h1>
        </div>
        <h2 style="font-size: 20px; color: #111827; margin-bottom: 16px;">Confirme seu email</h2>
        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 24px;">
          Clique no botão abaixo para verificar seu endereço de email e ativar sua conta.
        </p>
        <a href="${verifyUrl}" style="display: inline-block; background: linear-gradient(135deg, #f97316, #ea580c); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          Verificar email
        </a>
        <p style="color: #9ca3af; font-size: 13px; margin-top: 32px; line-height: 1.5;">
          Se você não criou uma conta no Humaniz.ai, pode ignorar este email.<br>
          Este link expira em 24 horas.
        </p>
      </div>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${getAppUrl()}/reset-password?token=${token}`;

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Redefinir senha — Humaniz.ai",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;">
            <span style="color: white; font-size: 24px;">✨</span>
          </div>
          <h1 style="margin: 16px 0 8px; font-size: 24px; color: #111827;">Humaniz.ai</h1>
        </div>
        <h2 style="font-size: 20px; color: #111827; margin-bottom: 16px;">Redefinir sua senha</h2>
        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 24px;">
          Recebemos um pedido para redefinir a senha da sua conta. Clique no botão abaixo para criar uma nova senha.
        </p>
        <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #f97316, #ea580c); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          Redefinir senha
        </a>
        <p style="color: #9ca3af; font-size: 13px; margin-top: 32px; line-height: 1.5;">
          Se você não solicitou a redefinição de senha, ignore este email.<br>
          Este link expira em 1 hora.
        </p>
      </div>
    `,
  });
}
