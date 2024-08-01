import { NextResponse } from 'next/server';

const BASE_TARGET_URL =
  'https://my-project-2-4e46d.firebaseapp.com/__/auth/handler';

async function proxyRequest(request) {
  const url = new URL(request.url);

  // Construct the target URL with the incoming query parameters
  const targetUrl = new URL(BASE_TARGET_URL);
  targetUrl.search = url.search;

  // eslint-disable-next-line no-console
  console.log('targetUrl', targetUrl);

  const proxyRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.method === 'POST' ? request.body : null, // Only include body for POST requests
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
  console.log('Handling GET request');
  return proxyRequest(request);
}

export async function POST(request) {
  // eslint-disable-next-line no-console
  console.log('Handling POST request');
  return proxyRequest(request);
}

// Add other HTTP methods as needed (PUT, DELETE, etc.)
