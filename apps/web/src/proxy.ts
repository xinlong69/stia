import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  
  // 1. Run Internationalization first
  const response = handleI18nRouting(request);
  const { pathname } = request.nextUrl;

  // 2. Clear out any locale prefixes (e.g., /en/login -> /login) to match cleanly
  let cleanPath = pathname;
  for (const locale of routing.locales) {
    if (cleanPath.startsWith(`/${locale}/`)) {
      cleanPath = cleanPath.replace(`/${locale}`, "");
      break;
    } else if (cleanPath === `/${locale}`) {
      cleanPath = "/";
      break;
    }
  }

  // 3. Authenticated Gatekeeping
  const sessionToken = 
    request.cookies.get("better-auth.session_token")?.value ??
    request.cookies.get("__Secure-better-auth.session_token")?.value;

  // The pages you want to block logged-in users from visiting
  const authRoutes = ["/", "/login", "/register"];

  if (sessionToken && authRoutes.includes(cleanPath)) {
    // Redirect authenticated users directly to /home (or /dashboard)
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|trpc|_next/static|_next/image|favicon.ico).*)"],
};