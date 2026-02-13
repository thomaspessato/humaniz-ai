import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email é obrigatório" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    // Sempre retornar sucesso para não revelar se o email existe
    if (!user) {
      return NextResponse.json({
        message: "Se o email existir, enviaremos instruções de recuperação.",
      });
    }

    const resetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(email, resetToken.token);

    return NextResponse.json({
      message: "Se o email existir, enviaremos instruções de recuperação.",
    });
  } catch (error) {
    console.error("Erro ao enviar email de recuperação:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
