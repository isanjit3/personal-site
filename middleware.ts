import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (url.hostname === 'dev.sanjit.app') { // Apply to dev domain only
    if (basicAuth) {
      const auth = basicAuth.split(' ')[1];
      const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

      if (user === process.env.USER && pwd === process.env.PASS) {
        return NextResponse.next(); // User authenticated
      }
    }

    const res = NextResponse.next();
    res.headers.set('WWW-Authenticate', 'Basic realm="Secure Area"');
    return new Response('Authentication required', {
      status: 401,
      headers: res.headers,
    });
  }

  return NextResponse.next(); // Allow access for other domains
}

export const config = {
  matcher: ['/', '/:path*'],
};
