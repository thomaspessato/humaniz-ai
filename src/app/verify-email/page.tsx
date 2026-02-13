"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Token de verificação não encontrado.");
      return;
    }

    async function verify() {
      try {
        const res = await fetch("/api/auth/verify-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (!res.ok) {
          setStatus("error");
          setMessage(data.error || "Erro ao verificar email.");
          return;
        }

        setStatus("success");
        setMessage("Seu email foi verificado com sucesso!");
      } catch {
        setStatus("error");
        setMessage("Erro de conexão. Tente novamente.");
      }
    }

    verify();
  }, [token]);

  return (
    <div className="text-center py-4">
      {status === "loading" && (
        <>
          <Loader2 className="w-8 h-8 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Verificando seu email...</p>
        </>
      )}

      {status === "success" && (
        <>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Email verificado!
          </h2>
          <p className="text-gray-500 text-sm mb-6">{message}</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg font-medium bg-linear-to-r from-orange-500 to-orange-600 text-white px-6 py-3 hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Ir para o Dashboard
          </Link>
        </>
      )}

      {status === "error" && (
        <>
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Erro na verificação
          </h2>
          <p className="text-gray-500 text-sm mb-6">{message}</p>
          <Link
            href="/login"
            className="text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            Voltar para o login
          </Link>
        </>
      )}
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Verificação de email
          </h1>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <Suspense fallback={<div className="text-center py-4 text-gray-500">Carregando...</div>}>
            <VerifyEmailContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
