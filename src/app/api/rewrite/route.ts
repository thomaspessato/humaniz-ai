import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { rewriteText } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const { text, tone } = await req.json();

    if (!text || text.trim().length < 10) {
      return NextResponse.json(
        { error: "O texto precisa ter pelo menos 10 caracteres" },
        { status: 400 }
      );
    }

    if (text.length > 5000) {
      return NextResponse.json(
        { error: "O texto não pode ter mais que 5000 caracteres" },
        { status: 400 }
      );
    }

    const result = await rewriteText(text, tone);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro na reescrita:", error);
    return NextResponse.json(
      { error: "Erro ao processar reescrita. Tente novamente." },
      { status: 500 }
    );
  }
}
