import { NextResponse } from "next/server";

// Allow protected routes only if the user is logged in
export function middleware(request) {
  const cookies = request.cookies;

  const isLogged = cookies.get("isLogged")?.value.trim() === "true"; 

  if (!isLogged && request.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account", "/account/addrando", "/account/updaterando/:id*", "/account/addnews", "/account/updatenews/:id*"], // Protéger toutes les routes sous /admin
};
