import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// 1. Specify protected and public routes
const protectedRoutes = ['/home', '/profile', '/settings'];
const publicRoutes = ['/', '/login', '/register', ]

export default function proxy(req: NextRequest) {
  const response = handleI18nRouting(req);
  const path = req.nextUrl.pathname;

  // 3. Check if the current route is protected or public
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 4. Clear out any locale prefixes (e.g., /en/login -> /login) to match cleanly
  let cleanPath = path;
  for (const locale of routing.locales) {
    if (cleanPath.startsWith(`/${locale}/`)) {
      cleanPath = cleanPath.replace(`/${locale}`, "");
      break;
    } else if (cleanPath === `/${locale}`) {
      cleanPath = "/";
      break;
    }
  }

  // 5. Decrypt the session from the cookie
  const sessionToken = 
    req.cookies.get("better-auth.session_token")?.value ??
    req.cookies.get("__Secure-better-auth.session_token")?.value;

  // 6. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !sessionToken) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // 7. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && sessionToken && !req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|trpc|_next/static|_next/image|favicon.ico).*)"],
};