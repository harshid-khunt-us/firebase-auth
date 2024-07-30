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
};

export default nextConfig;
