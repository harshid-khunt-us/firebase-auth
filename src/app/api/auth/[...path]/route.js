import { NextResponse } from 'next/server';

const TARGET = `https://my-project-2-4e46d.firebaseapp.com/__/auth/:path*`;

async function proxyRequest(request) {
  const url = new URL(request.url);
  const targetUrl = new URL(url.pathname.replace(/^\/api\/auth/, ''), TARGET);

  // Forward the search params
  targetUrl.search = url.search;

  const proxyRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  const response = await fetch(proxyRequest);

  // Create a new response with the proxy response's body and headers
  const proxyResponse = new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });

  return proxyResponse;
}

export async function GET(request) {
  // eslint-disable-next-line no-console
  console.log('in api GET');
  return proxyRequest(request);
}

export async function POST(request) {
  // eslint-disable-next-line no-console
  console.log('in api POST');
  return proxyRequest(request);
}

// Add other HTTP methods as needed (PUT, DELETE, etc.)
