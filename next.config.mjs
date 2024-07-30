import ESLintWebpackPlugin from 'eslint-webpack-plugin';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new ESLintWebpackPlugin({
          emitWarning: true,
        }),
      );
    }
    return config;
  },
  reactStrictMode: false,
  trailingSlash: false,
  async headers() {
    const headers = [];
    headers.push({
      headers: [
        ...(process.env.NEXT_PUBLIC_ENV !== 'production'
          ? [
              {
                key: 'X-Robots-Tag',
                value: 'noindex',
              },
            ]
          : []),
        {
          key: 'x-middleware-cache',
          value: 'no-cache',
        },
      ],
      source: '/:path*',
    });
    return headers;
  },
  async rewrites() {
    return [
      {
        source: '/__/auth/:path*',
        destination: `https://my-project-2-4e46d.firebaseapp.com/__/auth/:path*`,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_SERVER_URL: process.env.NEXT_SERVER_URL,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
};

export default nextConfig;
