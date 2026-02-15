import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET: lista posts do usuário
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const posts = await prisma.post.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: { versions: true },
  });

  return NextResponse.json(posts);
}

// POST: cria/salva um post
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      originalText,
      rewrittenText,
      finalText,
      humanScore,
      clarityScore,
      ctaScore,
      scheduledAt,
      versions,
    } = body;

    if (!originalText) {
      return NextResponse.json(
        { error: "Texto original é obrigatório" },
        { status: 400 }
      );
    }

    // Check if user has LinkedIn connected when scheduling a post
    if (scheduledAt) {
      const linkedInAccount = await prisma.account.findFirst({
        where: {
          userId: session.user.id,
          provider: "linkedin",
        },
      });

      if (!linkedInAccount) {
        return NextResponse.json(
          { error: "LinkedIn não conectado. Você precisa conectar sua conta do LinkedIn para agendar posts." },
          { status: 403 }
        );
      }
    }

    const status = scheduledAt ? "SCHEDULED" : finalText ? "READY" : "DRAFT";

    const post = await prisma.post.create({
      data: {
        userId: session.user.id,
        originalText,
        rewrittenText,
        finalText: finalText || rewrittenText,
        humanScore,
        clarityScore,
        ctaScore,
        status,
        scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
        versions: versions
          ? {
              create: versions.map(
                (v: { text: string; variant: string; score?: number }) => ({
                  text: v.text,
                  variant: v.variant,
                  score: v.score,
                })
              ),
            }
          : undefined,
      },
      include: { versions: true },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar post:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
