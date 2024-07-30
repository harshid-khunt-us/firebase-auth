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
};

export default nextConfig;
