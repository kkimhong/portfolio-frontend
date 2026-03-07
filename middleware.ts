// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const pathname = request.url;
//   //Checking if user still of their token
//   const token = request.cookies.get("jwt")?.value;

//   //Checking if user try to go to /dashboard without token and redirectuser to /login
//   if (!token && request.nextUrl.pathname.startsWith("/admin")) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   if (pathname === "/auth/login" && token) {
//     return NextResponse.redirect(new URL("/admin", request.url));
//   }

//   //continue if the user is authenticated or un-protected route
//   return NextResponse.next();
// }
