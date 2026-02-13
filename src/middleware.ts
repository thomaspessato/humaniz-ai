import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se existe cookie de sessão (sem tentar decriptar)
  const sessionCookie =
    request.cookies.get("__Secure-authjs.session-token") ??
    request.cookies.get("authjs.session-token") ??
    request.cookies.get("__Secure-next-auth.session-token") ??
    request.cookies.get("next-auth.session-token");

  const hasSession = !!sessionCookie?.value;

  // Redirecionar usuários logados para dashboard se tentarem acessar login/register
  if (hasSession && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"],
};
