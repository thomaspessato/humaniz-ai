import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "Token é obrigatório" },
        { status: 400 }
      );
    }

    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) {
      return NextResponse.json(
        { error: "Token inválido ou já utilizado" },
        { status: 400 }
      );
    }

    if (verificationToken.expires < new Date()) {
      await prisma.verificationToken.delete({
        where: { identifier_token: {
          identifier: verificationToken.identifier,
          token: verificationToken.token,
        }},
      });
      return NextResponse.json(
        { error: "Token expirado. Faça login e solicite um novo email." },
        { status: 400 }
      );
    }

    // Marcar email como verificado
    await prisma.user.update({
      where: { email: verificationToken.identifier },
      data: { emailVerified: new Date() },
    });

    // Limpar token usado
    await prisma.verificationToken.delete({
      where: { identifier_token: {
        identifier: verificationToken.identifier,
        token: verificationToken.token,
      }},
    });

    return NextResponse.json({ message: "Email verificado com sucesso!" });
  } catch (error) {
    console.error("Erro ao verificar email:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
