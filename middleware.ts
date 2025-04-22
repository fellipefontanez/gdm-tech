import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const PUBLIC_ROUTES_REGEX = /^\/(cliente-nao-autenticado|sobre|register)$/;

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.next();
    }

    if (PUBLIC_ROUTES_REGEX.test(pathname)) return NextResponse.next();

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    console.log("Middleware pathname:", pathname);
    console.log("Token", token);

    if (!token) {
        const url = request.nextUrl.clone();
        url.pathname = '/cliente-nao-autenticado';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!^/api|^/_next|^/favicon.ico|^/login|^/register|^/cliente-nao-autenticado|^/public).*)',
    ],
};

